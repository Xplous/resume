// Based on React Bits OrbitImages by Dominik Koch
// Adapted to accept ReactNode items and framer-motion

"use client";

import { useMemo, useEffect, useRef, useState, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";

type OrbitShape = "ellipse" | "circle";

interface OrbitImagesProps {
  images?: string[];
  items?: ReactNode[];
  altPrefix?: string;
  shape?: OrbitShape;
  baseWidth?: number;
  radiusX?: number;
  radiusY?: number;
  radius?: number;
  rotation?: number;
  duration?: number;
  itemSize?: number;
  direction?: "normal" | "reverse";
  fill?: boolean;
  className?: string;
  showPath?: boolean;
  pathColor?: string;
  pathWidth?: number;
  easing?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  paused?: boolean;
  centerContent?: ReactNode;
  responsive?: boolean;
}

interface OrbitItemProps {
  item: ReactNode;
  index: number;
  totalItems: number;
  path: string;
  itemSize: number;
  rotation: number;
  progress: MotionValue<number>;
  fill: boolean;
}

function generateEllipsePath(
  cx: number,
  cy: number,
  rx: number,
  ry: number
): string {
  return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`;
}

function generateCirclePath(cx: number, cy: number, r: number): string {
  return generateEllipsePath(cx, cy, r, r);
}

function OrbitItem({
  item,
  index,
  totalItems,
  path,
  itemSize,
  rotation,
  progress,
  fill,
}: OrbitItemProps) {
  const itemOffset = fill ? (index / totalItems) * 100 : 0;

  const offsetDistance = useTransform(progress, (p: number) => {
    const offset = (((p + itemOffset) % 100) + 100) % 100;
    return `${offset}%`;
  });

  return (
    <motion.div
      className="absolute will-change-transform select-none"
      style={{
        width: itemSize,
        height: itemSize,
        offsetPath: `path("${path}")`,
        offsetRotate: "0deg",
        offsetAnchor: "center center",
        offsetDistance,
      }}
    >
      <div style={{ transform: `rotate(${-rotation}deg)` }}>{item}</div>
    </motion.div>
  );
}

export default function OrbitImages({
  images = [],
  items: externalItems,
  altPrefix = "Orbiting image",
  shape = "ellipse",
  baseWidth = 1400,
  radiusX = 700,
  radiusY = 170,
  radius = 300,
  rotation = -8,
  duration = 40,
  itemSize = 64,
  direction = "normal",
  fill = true,
  className = "",
  showPath = false,
  pathColor = "rgba(255,255,255,0.05)",
  pathWidth = 1,
  easing = "linear",
  paused = false,
  centerContent,
  responsive = false,
}: OrbitImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const designCenterX = baseWidth / 2;
  const designCenterY = baseWidth / 2;

  const path = useMemo(() => {
    switch (shape) {
      case "circle":
        return generateCirclePath(designCenterX, designCenterY, radius);
      case "ellipse":
      default:
        return generateEllipsePath(
          designCenterX,
          designCenterY,
          radiusX,
          radiusY
        );
    }
  }, [shape, designCenterX, designCenterY, radiusX, radiusY, radius]);

  useEffect(() => {
    if (!responsive || !containerRef.current) return;
    const updateScale = () => {
      if (!containerRef.current) return;
      setScale(containerRef.current.clientWidth / baseWidth);
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [responsive, baseWidth]);

  const progress = useMotionValue(0);

  useEffect(() => {
    if (paused) return;
    const controls = animate(progress, direction === "reverse" ? -100 : 100, {
      duration,
      ease: easing,
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controls.stop();
  }, [progress, duration, easing, direction, paused]);

  const renderedItems =
    externalItems ||
    images.map((src, index) => (
      <img
        key={src}
        src={src}
        alt={`${altPrefix} ${index + 1}`}
        draggable={false}
        className="w-full h-full object-contain"
      />
    ));

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto ${className}`}
      style={{
        width: responsive ? "100%" : undefined,
        aspectRatio: responsive ? "1 / 1" : undefined,
      }}
      aria-hidden="true"
    >
      <div
        className={
          responsive
            ? "absolute left-1/2 top-1/2"
            : "relative w-full h-full"
        }
        style={{
          width: responsive ? baseWidth : "100%",
          height: responsive ? baseWidth : "100%",
          transform: responsive
            ? `translate(-50%, -50%) scale(${scale})`
            : undefined,
          transformOrigin: "center center",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center center",
          }}
        >
          {showPath && (
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${baseWidth} ${baseWidth}`}
              className="absolute inset-0 pointer-events-none"
            >
              <path
                d={path}
                fill="none"
                stroke={pathColor}
                strokeWidth={pathWidth / scale}
              />
            </svg>
          )}

          {renderedItems.map((item, index) => (
            <OrbitItem
              key={index}
              item={item}
              index={index}
              totalItems={renderedItems.length}
              path={path}
              itemSize={itemSize}
              rotation={rotation}
              progress={progress}
              fill={fill}
            />
          ))}
        </div>
      </div>

      {centerContent && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {centerContent}
        </div>
      )}
    </div>
  );
}
