import PropTypes from 'prop-types'
import { colors } from '../../styles/colors'
import { dimensiones } from '../../styles/dimensions'

export const Label = ({
  children,
  color = colors.font.base,
  fontSize = dimensiones.font.base,
  htmlFor,
}) => {
  return (
    <label style={{ color, fontSize }} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  htmlFor: PropTypes.string,
}
