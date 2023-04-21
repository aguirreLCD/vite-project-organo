import "./Collaborator.css";

const Collaborator = ({ name, role, profilePicture, teamBg }) => {
  return (
    <div className="collaborator">
      <div
        className="header-collaborator"
        style={{
          backgroundColor: teamBg,
        }}
      >
        <img src={profilePicture} alt={name} />
      </div>
      <div className="footer-collaborator">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
