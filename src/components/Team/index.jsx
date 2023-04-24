import Collaborator from "../Collaborator";

import "./Team.css";

const Team = ({ team, collaborators }) => {
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
          {collaborators.map((collaborator, index) => (
            <Collaborator
              key={index}
              collaborator={collaborator}
              teamBg={team.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
