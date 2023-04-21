import banner from "../../assets/img/banner.svg";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <img src={banner} alt="Main Banner Organo" />
    </header>
  );
}

export default Banner;
