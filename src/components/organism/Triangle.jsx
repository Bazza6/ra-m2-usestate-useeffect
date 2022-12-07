import { TriangleSvg } from '../atoms'
import { InputNumber, InputColor } from '../molecules'

export const Triangle = ({
  triangleSize,
  triangleColor,
  setTriangleSize,
  setTriangleColor,
}) => {
  return (
    <>
      <div style={{ display: 'block', marginBottom: '8px' }}>
        <InputNumber
          id='triangleNumber'
          sizeValue={triangleSize}
          onChangeSize={(e) => setTriangleSize(Number(e.target.value))}
        />
        <InputColor
          id='triangleColor'
          colorValue={triangleColor}
          onChangeColor={(e) => setTriangleColor(e.target.value)}
        />
      </div>
      <TriangleSvg triangleSize={triangleSize} triangleColor={triangleColor} />
    </>
  )
}
