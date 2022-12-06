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
      {/* En lugar de un DIV con CSS usar un SVG, importado a nivel de atomos, con valores por defecto y validación por PropTypes */}
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
