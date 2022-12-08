import PropTypes from 'prop-types'
import { colors } from '../../styles/colors'
import { dimensiones } from '../../styles/dimensions'

export const Title = ({
  children,
  color = colors.font.headings,
  fontSize = dimensiones.font.h1,
}) => {
  return <h1 style={{ color, fontSize }}>{children}</h1>
}

Title.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.string,
}
