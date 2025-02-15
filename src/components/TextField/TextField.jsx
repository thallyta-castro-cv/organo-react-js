export const TextField = (props) => {

  const handleChange = (event) => {
    props.change(event.target.value);
  }
  
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.value} onChange={handleChange} required={props.required} placeholder={props.placeholder} type="text" />
    </div>
  );
};
