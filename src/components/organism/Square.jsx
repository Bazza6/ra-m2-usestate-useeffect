import InputField from "../molecules/InputField";

function Square({ squareSize, setSquareSize, squareColor, setSquareColor }) {
  return (
    <div style={{ margin: "16px" }}>
      <InputField
        sizeValue={squareSize}
        onChangeSize={(e) => setSquareSize(Number(e.target.value))}
        colorValue={squareColor}
        onChangeColor={(e) => setSquareColor(e.target.value)}
      />
      <div
        style={{
          marginTop: "10px",
          height: `${squareSize}px`,
          width: `${squareSize}px`,
          backgroundColor: squareColor,
        }}
      ></div>
    </div>
  );
}

export default Square;
