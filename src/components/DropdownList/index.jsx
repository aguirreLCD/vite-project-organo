import "./DropdownList.css";

const DropdownList = (props) => {
  console.log(props.value);
  return (
    <div className="dropdownList">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.updateField(event.target.value)}
        required={props.needed}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;
