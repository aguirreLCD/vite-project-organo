import "./DropdownList.css";

const DropdownList = ({ label, itens, value, updateField, needed = false }) => {
  return (
    <div className="dropdownList">
      <label>{label}</label>
      <select
        required={needed}
        value={value}
        onChange={(event) => updateField(event.target.value)}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;
