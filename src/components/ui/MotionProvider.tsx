"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

// Honors the visitor's "reduce motion" OS setting for every framer-motion animation.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
