import Span from "../atoms/Span/Span";

function InputField(props) {
  return (
    <div>
      <label>
        <Span>size:</Span>
        <input
          style={{ width: "48px" }}
          type="number"
          value={props.sizeValue}
          onChange={props.onChangeSize}
        />
      </label>
      <label>
        <Span>color:</Span>
        <input
          type="color"
          value={props.colorValue}
          onChange={props.onChangeColor}
        />
      </label>
    </div>
  );
}

export default InputField;
