import PropTypes from 'prop-types'
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
          name='triangleNumber'
          numberValue={triangleSize}
          onChangeNumber={(e) => setTriangleSize(Number(e.target.value))}
        >
          Tamaño:
        </InputNumber>
        <InputColor
          id='triangleColor'
          name='triangleColor'
          colorValue={triangleColor}
          onChangeColor={(e) => setTriangleColor(e.target.value)}
        >
          Color:
        </InputColor>
      </div>
      <TriangleSvg triangleSize={triangleSize} triangleColor={triangleColor} />
    </>
  )
}

Triangle.propTypes = {
  triangleSize: PropTypes.number,
  triangleColor: PropTypes.string,
  setTriangleSize: PropTypes.func.isRequired,
  setTriangleColor: PropTypes.func.isRequired,
}
