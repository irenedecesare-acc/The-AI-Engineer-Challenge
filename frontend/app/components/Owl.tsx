"use client";

import { useEffect, useState } from "react";

export type OwlState = "idle" | "thinking" | "talking";

/**
 * Grove the owl — a hand-drawn SVG mascot with three CSS/JS-driven states:
 *   - idle:     gentle CSS float loop
 *   - thinking: pupils drift sinusoidally (setInterval) + leaf antenna pulses
 *   - talking:  mouth toggles smile <-> open every ~165ms
 * No animation libraries — pure SVG + CSS keyframes + attribute changes.
 */
export default function Owl({
  state,
  size = 56,
}: {
  state: OwlState;
  size?: number;
}) {
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [mouthOpen, setMouthOpen] = useState(false);

  // thinking: pupils move on a sine/cosine path
  useEffect(() => {
    if (state !== "thinking") {
      setPupil({ x: 0, y: 0 });
      return;
    }
    let t = 0;
    const id = setInterval(() => {
      t += 0.18;
      setPupil({ x: Math.sin(t) * 2.4, y: Math.cos(t * 0.9) * 1.3 });
    }, 50);
    return () => clearInterval(id);
  }, [state]);

  // talking: mouth alternates smile <-> open ellipse
  useEffect(() => {
    if (state !== "talking") {
      setMouthOpen(false);
      return;
    }
    const id = setInterval(() => setMouthOpen((m) => !m), 165);
    return () => clearInterval(id);
  }, [state]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={state === "idle" ? "owl-float" : undefined}
      role="img"
      aria-label="Grove the owl"
    >
      {/* leaf-sprig antenna (pulses while thinking) */}
      <g className={state === "thinking" ? "owl-pulse" : undefined}>
        <path
          d="M50 30 C50 22 50 18 50 13"
          stroke="#46604f"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50 16 C43 9 38 12 41 19 C44 23 48 21 50 16 Z"
          fill="#6fa287"
        />
      </g>

      {/* ear tufts */}
      <path d="M30 27 L25 11 L41 22 Z" fill="#5b7a6b" />
      <path d="M70 27 L75 11 L59 22 Z" fill="#5b7a6b" />

      {/* wings */}
      <ellipse cx="21" cy="62" rx="7" ry="16" fill="#46604f" />
      <ellipse cx="79" cy="62" rx="7" ry="16" fill="#46604f" />

      {/* body */}
      <ellipse cx="50" cy="60" rx="32" ry="34" fill="#5b7a6b" />

      {/* belly */}
      <ellipse cx="50" cy="68" rx="20" ry="22" fill="#eaf0ea" />

      {/* eyes */}
      <circle
        cx="38"
        cy="50"
        r="13"
        fill="#fbfaf5"
        stroke="#46604f"
        strokeWidth="2"
      />
      <circle
        cx="62"
        cy="50"
        r="13"
        fill="#fbfaf5"
        stroke="#46604f"
        strokeWidth="2"
      />

      {/* pupils (translated by JS while thinking) */}
      <g transform={`translate(${pupil.x} ${pupil.y})`}>
        <circle cx="38" cy="50" r="5.5" fill="#243029" />
        <circle cx="62" cy="50" r="5.5" fill="#243029" />
        <circle cx="40" cy="48" r="1.6" fill="#ffffff" />
        <circle cx="64" cy="48" r="1.6" fill="#ffffff" />
      </g>

      {/* beak */}
      <path d="M50 56 L45 62 L55 62 Z" fill="#e0a04a" />

      {/* mouth: smile path or open ellipse */}
      {mouthOpen ? (
        <ellipse cx="50" cy="71" rx="5" ry="4" fill="#243029" />
      ) : (
        <path
          d="M43 68 Q50 74 57 68"
          stroke="#243029"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      )}

      {/* feet */}
      <g stroke="#e0a04a" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M41 92 l-3 4 M41 92 l0 5 M41 92 l3 4" />
        <path d="M59 92 l-3 4 M59 92 l0 5 M59 92 l3 4" />
      </g>
    </svg>
  );
}
