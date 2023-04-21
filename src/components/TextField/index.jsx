import "./TextField.css";

// arrow function
const TextField = (props) => {
  
  const typing = (event) => {
    props.updateField(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={typing}
        required={props.needed}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
