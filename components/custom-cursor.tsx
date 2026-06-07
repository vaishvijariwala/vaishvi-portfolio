"use client";

import React, { useState, useEffect } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor-label]");
      if (cursorEl) {
        setLabel(cursorEl.getAttribute("data-cursor-label"));
      } else {
        setLabel(null);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement | null;
      if (!relatedTarget?.closest("[data-cursor-label]")) {
        setLabel(null);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!label) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(12px, 12px)",
      }}
    >
      <span className="inline-block whitespace-nowrap rounded-full border border-black bg-white px-3 py-1.5 text-xs font-medium text-black shadow-md">
        {label}
      </span>
    </div>
  );
}
