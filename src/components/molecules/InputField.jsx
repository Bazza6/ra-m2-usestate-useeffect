import Span from "../atoms/Span/Span";

function InputField(props) {
  return (
    <div>
      {/* El label debería tener htmlFor por accesibilidad */}
      <label>
        {/* El componente SPAN no tiene sentido aquí, debería de ser el Label */}
        <Span>size:</Span>
        {/* El input debería tener id y name por accesibilidad */}
        <input
          style={{ width: "48px" }}
          type="number"
          value={props.sizeValue}
          onChange={props.onChangeSize}
        />
      </label>
      {/* Estas llamando InputField a un componente que tiene varios inputs y labels, mejor crear un componente InputNumber, otro InputColor y agruparlos donde los desees usar. */}
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
