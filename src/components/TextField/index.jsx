import "./TextField.css";

// arrow function
const TextField = ({
  label,
  placeholder,
  value,
  updateField,
  needed = false,
}) => {
  

  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateField(event.target.value)}
        required={needed}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
