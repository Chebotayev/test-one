import React from "react";

const Arrow = ({ xStart, xEnd, yStart, yEnd }) => (
  <svg className="arrow">
   <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
    <line x1={xStart} y1={yStart} x2={xEnd} y2={yEnd} fill="none" stroke="black" marker-end="url(#arrow)" />
  </svg>
);

export default Arrow;
