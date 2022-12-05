import InputField from "../molecules/InputField";

function Circle({ circleSize, setCircleSize, circleColor, setCircleColor }) {
  return (
    <div style={{ margin: "16px" }}>
      <InputField
        sizeValue={circleSize}
        onChangeSize={(e) => setCircleSize(Number(e.target.value))}
        colorValue={circleColor}
        onChangeColor={(e) => setCircleColor(e.target.value)}
      />
      <div
        style={{
          marginTop: "10px",
          height: `${circleSize}px`,
          width: `${circleSize}px`,
          backgroundColor: circleColor,
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></div>
    </div>
  );
}

export default Circle;
