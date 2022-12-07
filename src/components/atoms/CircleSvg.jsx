import PropTypes from "prop-types";

export const CircleSvg = ({ circleSize = 101, circleColor = "#99ff99" }) => {
  return (
    <svg width={`${circleSize}px`} height={`${circleSize}px`}>
      <circle
        cx="50%"
        cy="50%"
        r={`${circleSize / 2}px`}
        fill={`${circleColor}`}
      />
    </svg>
  );
};

CircleSvg.propTypes = {
  circleSize: PropTypes.number,
  circleColor: PropTypes.string,
};
