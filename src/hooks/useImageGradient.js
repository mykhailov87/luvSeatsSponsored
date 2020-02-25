// Core
import { useState } from 'react';

export function useImageGradient(gradientStyles = {}) {
  const [gradientProps] = useState({
    // angle: 180,
    colors: ['rgba(0, 0, 0, 0.01)', 'rgba(34, 34, 34, 0.944)', 'rgb(0, 0, 0)'],
    // end: { x: 77.658, y: 178.282 },
    end: { x: 0, y: 1 },
    locations: [0, 0.887, 1],
    style: gradientStyles,
    useAngle: false,
    // start: { x: 77.658, y: 88.451 },
    start: { x: 0, y: 0.5 },
  });

  return gradientProps;
}
