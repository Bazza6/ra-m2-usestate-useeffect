import { Label } from '../atoms'

export const InputNumber = ({ id, sizeValue, onChangeSize }) => {
  return (
    <Label htmlFor={id}>
      size:
      <input
        name={id}
        id={id}
        style={{ width: '48px' }}
        type='number'
        value={sizeValue}
        onChange={onChangeSize}
      />
    </Label>
  )
}
