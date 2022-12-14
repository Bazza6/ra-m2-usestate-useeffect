import PropTypes from 'prop-types'
import { Label } from '../atoms'

export const InputNumber = ({
  id,
  name,
  numberValue,
  onChangeNumber = () => {},
  children,
}) => {
  return (
    <Label htmlFor={id}>
      {children}
      <input
        name={name}
        id={id}
        style={{ width: '48px' }}
        type='number'
        value={numberValue}
        onChange={onChangeNumber}
      />
    </Label>
  )
}

InputNumber.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  numberValue: PropTypes.number,
  onChangeNumber: PropTypes.func,
  children: PropTypes.node,
}
