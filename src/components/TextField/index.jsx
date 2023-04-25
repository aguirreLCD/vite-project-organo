import "./TextField.css";

// arrow function
const TextField = ({
  type = "text",
  label,
  placeholder,
  value,
  updateField,
  needed = false,
}) => {
  return (
    <div className={`text-field text-field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => updateField(event.target.value)}
        required={needed}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
