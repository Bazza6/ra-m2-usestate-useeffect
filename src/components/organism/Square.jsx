import PropTypes from 'prop-types'
import { SquareSvg } from '../atoms'
import { InputNumber, InputColor } from '../molecules'

export const Square = ({
  squareSize,
  setSquareSize,
  squareColor,
  setSquareColor,
}) => {
  return (
    <>
      <div style={{ display: 'block', marginBottom: '8px' }}>
        <InputNumber
          id='squareNumber'
          numberValue={squareSize}
          onChangeNumber={(e) => setSquareSize(Number(e.target.value))}
        >
          Tamaño:
        </InputNumber>
        <InputColor
          id='squareColor'
          colorValue={squareColor}
          onChangeColor={(e) => setSquareColor(e.target.value)}
        >
          Color:
        </InputColor>
      </div>
      <SquareSvg squareSize={squareSize} squareColor={squareColor} />
    </>
  )
}

Square.propTypes = {
  squareSize: PropTypes.number,
  squareColor: PropTypes.string,
  setSquareSize: PropTypes.func.isRequired,
  setSquareColor: PropTypes.func.isRequired,
}
