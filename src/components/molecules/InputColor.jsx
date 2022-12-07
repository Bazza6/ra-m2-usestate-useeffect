import { Label } from '../atoms'

export const InputColor = ({ id, colorValue, onChangeColor }) => {
  return (
    <Label htmlFor={id}>
      color:
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
