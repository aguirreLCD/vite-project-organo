import Collaborator from "../Collaborator";

import "./Team.css";

const Team = ({ team, collaborators, whenDeleting }) => {
  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: team.secondaryColor,
        }}
      >
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
