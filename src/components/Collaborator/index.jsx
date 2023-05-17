import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Collaborator.css";

const Collaborator = ({
  collaborator,
  teamBg,
  whenDeleting,
  whenFavoriting,
}) => {
  function toFavorite() {
    whenFavoriting(collaborator.id);
  }

  const propsFavorite = {
    size: 25,
    onClick: toFavorite,
  };

  return (
    <div className="collaborator">
      <AiFillCloseCircle
        size={25}
        className="to-delete"
        onClick={() => whenDeleting(collaborator.id)}
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

        <div className="to-favorite">
          {collaborator.favorite ? (
            <AiOutlineHeart {...propsFavorite} />
          ) : (
            <AiFillHeart {...propsFavorite} color="#ff0000" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
