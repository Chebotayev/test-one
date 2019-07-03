import React from "react";

const Arrow = ({
  xStart,
  xEnd,
  yStart,
  yEnd,
  mainWidth,
  btcWidth,
  btcHight
}) => {
  const calcStartPointX = () => xStart + mainWidth / 2;
  const calcEndPointX = () => xEnd + btcWidth / 2;
  const calcEndPointY = () => yEnd + btcHight;

  return (
    <svg className="arrow">
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
      <line
        x1={calcStartPointX()}
        y1={yStart}
        x2={calcEndPointX()}
        y2={calcEndPointY()}
        fill="none"
        stroke="black"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};

export default Arrow;
