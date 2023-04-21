import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  // const teams = [
  //   "Programming",
  //   "Front-End",
  //   "Data-science",
  //   "Devops",
  //   "UX & Design",
  //   "Mobile",
  //   "Innovation & Management",
  // ];

  const submitingForm = (event) => {
    event.preventDefault();
    // console.log("form submited => ", name, role, profilePicture, team);

    props.registeredCollaborator({
      name,
      role,
      profilePicture,
      team,
    });
    setName("");
    setRole("");
    setProfilePicture("");
    setTeam("");
  };

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [team, setTeam] = useState("");

  return (
    <section className="form">
      <form onSubmit={submitingForm}>
        <h2>Register your team-card here</h2>
        <TextField
          needed={true}
          label="Name"
          placeholder="Type your name..."
          value={name}
          updateField={(value) => setName(value)}
        />
        <TextField
          needed={true}
          label="Role"
          placeholder="Type your role..."
          value={role}
          updateField={(value) => setRole(value)}
        />
        <TextField
          needed={true}
          label="Profile Picture"
          placeholder="Type your image path..."
          value={profilePicture}
          updateField={(value) => setProfilePicture(value)}
        />
        <DropdownList
          needed={true}
          label="Team"
          itens={props.teams}
          value={team}
          updateField={(value) => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
