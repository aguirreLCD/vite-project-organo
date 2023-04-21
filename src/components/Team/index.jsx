import Collaborator from "../Collaborator";

import "./Team.css";

const Team = (props) => {
  const cssStyles = {
    backgroundColor: props.secondaryColor,
  };

  return (
    // conditional in jsx
    // (props.collaborators.length > 0) ?
    // <section></section>
    // : ""

    props.collaborators.length > 0 && (
      <section className="team" style={cssStyles}>
        <h3
          style={{
            borderColor: props.primaryColor,
          }}
        >
          {props.teamName}
        </h3>

        <div className="collaborators">
          {props.collaborators.map((collaborator) => (
            <Collaborator
              key={collaborator.name}
              name={collaborator.name}
              role={collaborator.role}
              profilePicture={collaborator.profilePicture}
              teamBg={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
