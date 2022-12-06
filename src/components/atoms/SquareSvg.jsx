export const SquareSvg = ({ squareSize, squareColor }) => {
  // poner valores por defecto
  return (
    <svg width={`${squareSize}px`} height={`${squareSize}px`}>
      <rect
        width={`${squareSize}px`}
        height={`${squareSize}px`}
        fill={squareColor}
      />
    </svg>
  );
};
