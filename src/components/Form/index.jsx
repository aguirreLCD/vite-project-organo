import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = ({ whenRegistering, teams, registerNewTeam }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [team, setTeam] = useState("");

  const [teamNameNew, setTeamNameNew] = useState("");
  const [teamColorNew, setTeamColorNew] = useState("");

  // ao submeter
  const submitingForm = (event) => {
    //
    event.preventDefault();

    // ao cadastrar
    whenRegistering({
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
          itens={teams}
          value={team}
          updateField={(value) => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          registerNewTeam({ teamName: teamNameNew, color: teamColorNew });
          setTeamNameNew("");
          setTeamColorNew("");
        }}
      >
        <h2>Register your new team here</h2>
        <TextField
          needed
          label="Name"
          placeholder="Type your team name..."
          value={teamNameNew}
          updateField={(value) => setTeamNameNew(value)}
        />
        <TextField
          needed
          label="Color"
          placeholder="Type your team color..."
          value={teamColorNew}
          updateField={(value) => setTeamColorNew(value)}
        />

        <Button>Create New Team</Button>
      </form>
    </section>
  );
};

export default Form;
