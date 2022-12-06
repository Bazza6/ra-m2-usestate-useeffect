export const CircleSvg = ({ circleSize, circleColor }) => {
  // poner valores por defecto
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
