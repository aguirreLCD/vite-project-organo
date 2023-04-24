import { useState } from "react";
import Collaborator from "../Collaborator";

import "./Team.css";

const Team = ({ team, collaborators }) => {
  const [teamColor, setTeamColor] = useState(team.primaryColor);

  const changeTeamColor = (event) => {
    setTeamColor(event.target.value);
  };

  const deleteCollaborator = (event) => {
    console.log("deleting...", event.target.parent);
  };

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
          value={teamColor}
          onChange={changeTeamColor}
        />
        <h3
          style={{
            borderColor: teamColor,
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
                teamBg={teamColor}
                whenDeleting={deleteCollaborator}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
