import PropTypes from "prop-types";

export const TriangleSvg = ({
  triangleSize = 99,
  triangleColor = "#99ccff",
}) => {
  return (
    <svg width={`${triangleSize}px`} height={`${triangleSize}px`}>
      <polygon
        points={`${triangleSize / 2} ${triangleSize * 0.14},
          ${triangleSize} ${triangleSize}, 0 ${triangleSize}`}
        fill={triangleColor}
      />
    </svg>
  );
};

TriangleSvg.propTypes = {
  triangleSize: PropTypes.number,
  triangleColor: PropTypes.string,
};
