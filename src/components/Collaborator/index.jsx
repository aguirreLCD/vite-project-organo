import { AiFillCloseCircle } from "react-icons/ai";
import "./Collaborator.css";

const Collaborator = ({ collaborator, teamBg, whenDeleting }) => {
  return (
    <div className="collaborator">
      <AiFillCloseCircle
        size={25}
        className="to-delete"
        onClick={whenDeleting}
      />
      <div
        className="header-collaborator"
        style={{
          backgroundColor: teamBg,
        }}
      >
        <img src={collaborator.profilePicture} alt={collaborator.name} />
      </div>
      <div className="footer-collaborator">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.role}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
