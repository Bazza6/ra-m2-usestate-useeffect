import InputField from "../molecules/InputField";

function Triangle({
  triangleSize,
  triangleColor,
  setTriangleSize,
  setTriangleColor,
}) {
  return (
    <div style={{ margin: "16px" }}>
      <InputField
        sizeValue={triangleSize}
        onChangeSize={(e) => setTriangleSize(Number(e.target.value))}
        colorValue={triangleColor}
        onChangeColor={(e) => setTriangleColor(e.target.value)}
      />

      <div
        style={{
          marginTop: "10px",
          width: "0",
          height: "0",
          borderLeft: `${triangleSize / 2}px solid transparent`,
          borderRight: `${triangleSize / 2}px solid transparent`,
          borderBottom: `${triangleSize}px solid ${triangleColor}`,
        }}
      ></div>
    </div>
  );
}

export default Triangle;
