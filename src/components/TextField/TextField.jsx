export const TextField = (props) => {
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} type="text" />
    </div>
  );
};
