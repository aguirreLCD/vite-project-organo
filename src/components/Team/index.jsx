import hexToRgba from "hex-to-rgba";

import Collaborator from "../Collaborator";

import "./Team.css";

const Team = ({ team, collaborators, whenDeleting, changeColor }) => {
  // const [teamColor, setTeamColor] = useState(team.primaryColor);

  // const changeTeamColor = (event) => {
  //   setTeamColor(event.target.value);
  // };

  // const deleteCollaborator = (event) => {
  //   console.log("deleting...", event.target.parent);
  // };

  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: hexToRgba(team.color, 0.3),
        }}
      >
        <input
          type="color"
          className="input-color"
          value={team.color}
          onChange={(event) => changeColor(event.target.value, team.id)}
        />
        <h3
          style={{
            borderColor: team.color,
          }}
        >
          {team.teamName}
        </h3>

        <div className="collaborators">
          {collaborators.map((collaborator, index) => {
            return (
              <Collaborator
                key={index}
                collaborator={collaborator}
                teamBg={team.color}
                whenDeleting={whenDeleting}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
