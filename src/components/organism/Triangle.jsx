import { TriangleSVg } from "../atoms";
import { InputNumber, InputColor } from "../molecules";

export const Triangle = ({
  triangleSize,
  triangleColor,
  setTriangleSize,
  setTriangleColor,
}) => {
  return (
    <>
      <div style={{ display: "block", marginBottom: "8px" }}>
        <InputNumber
          id="triangle"
          sizeValue={triangleSize}
          onChangeSize={(e) => setTriangleSize(Number(e.target.value))}
        />
        <InputColor
          id="triangle"
          colorValue={triangleColor}
          onChangeColor={(e) => setTriangleColor(e.target.value)}
        />
      </div>
      <TriangleSVg triangleSize={triangleSize} triangleColor={triangleColor} />
    </>
  );
};
