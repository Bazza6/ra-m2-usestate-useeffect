import { SquareSvg } from "../atoms";
import { InputNumber, InputColor } from "../molecules";

export const Square = ({
  squareSize,
  setSquareSize,
  squareColor,
  setSquareColor,
}) => {
  return (
    <>
      <div style={{ display: "block", marginBottom: "8px" }}>
        <InputNumber
          id="square"
          sizeValue={squareSize}
          onChangeSize={(e) => setSquareSize(Number(e.target.value))}
        />
        <InputColor
          id="square"
          colorValue={squareColor}
          onChangeColor={(e) => setSquareColor(e.target.value)}
        />
      </div>
      <SquareSvg squareSize={squareSize} squareColor={squareColor} />
    </>
  );
};
