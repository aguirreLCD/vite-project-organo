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
          backgroundColor: team.secondaryColor,
        }}
      >
        <input
          type="color"
          className="input-color"
          value={team.primaryColor}
          onChange={(event) => changeColor(event.target.value, team.teamName)}
        />
        <h3
          style={{
            borderColor: team.primaryColor,
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
                teamBg={team.primaryColor}
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
