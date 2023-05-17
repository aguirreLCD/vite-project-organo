import hexToRgba from "hex-to-rgba";

import Collaborator from "../Collaborator";

import "./Team.css";

const Team = ({
  team,
  collaborators,
  whenDeleting,
  changeColor,
  whenFavoriting,
}) => {
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
                whenFavoriting={whenFavoriting}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
