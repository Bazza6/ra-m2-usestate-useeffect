export const TriangleSVg = ({ triangleSize, triangleColor }) => {
  // poner valores por defecto
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
