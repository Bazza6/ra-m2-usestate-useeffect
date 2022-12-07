import PropTypes from 'prop-types'

export const SquareSvg = ({ squareSize = 100, squareColor = '#ff99ff' }) => {
  return (
    <svg width={`${squareSize}px`} height={`${squareSize}px`}>
      <rect
        width={`${squareSize}px`}
        height={`${squareSize}px`}
        fill={squareColor}
      />
    </svg>
  )
}

SquareSvg.propTypes = {
  squareSize: PropTypes.number,
  squareColor: PropTypes.string,
}
