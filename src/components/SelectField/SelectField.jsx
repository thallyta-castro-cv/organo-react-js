export const SelectField = (props) => {
  return (
    <div className="select-field">
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.value}
        onChange={(e) => {
          props.change(e.target.value);
        }}
      >
        <option value="">Selecione um nível</option> {}
        {props.itens.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
