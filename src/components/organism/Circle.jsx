import { CircleSvg } from '../atoms'
import { InputNumber, InputColor } from '../molecules'

export const Circle = ({
  circleSize,
  setCircleSize,
  circleColor,
  setCircleColor,
}) => {
  return (
    <>
      <div style={{ display: 'block', marginBottom: '8px' }}>
        <InputNumber
          id='circleNumber'
          sizeValue={circleSize}
          onChangeSize={(e) => setCircleSize(Number(e.target.value))}
        />
        <InputColor
          id='circleColor'
          colorValue={circleColor}
          onChangeColor={(e) => {
            setCircleColor(e.target.value)
          }}
        />
      </div>
      <CircleSvg circleSize={circleSize} circleColor={circleColor} />
    </>
  )
}
