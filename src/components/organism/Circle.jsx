import PropTypes from 'prop-types'
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
          name='circleNumber'
          numberValue={circleSize}
          onChangeNumber={(e) => setCircleSize(Number(e.target.value))}
        >
          Tamaño:
        </InputNumber>
        <InputColor
          id='circleColor'
          name='circleColor'
          colorValue={circleColor}
          onChangeColor={(e) => {
            setCircleColor(e.target.value)
          }}
        >
          Color:
        </InputColor>
      </div>
      <CircleSvg circleSize={circleSize} circleColor={circleColor} />
    </>
  )
}

Circle.propTypes = {
  circleSize: PropTypes.number,
  circleColor: PropTypes.string,
  setCircleSize: PropTypes.func.isRequired,
  setCircleColor: PropTypes.func.isRequired,
}
