import PropTypes from 'prop-types'
import { Label } from '../atoms'

export const InputColor = ({
  id,
  colorValue,
  onChangeColor = () => {},
  children,
}) => {
  return (
    <Label htmlFor={id}>
      {children}
      <input
        name={id}
        id={id}
        type='color'
        value={colorValue}
        onChange={onChangeColor}
      />
    </Label>
  )
}

InputColor.propTypes = {
  id: PropTypes.string,
  colorValue: PropTypes.string,
  onChangeColor: PropTypes.func,
  children: PropTypes.node,
}
