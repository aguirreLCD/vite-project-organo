import banner from "../../assets/img/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      {/* <img src="../../../public/img/banner.png" alt="Main Banner Organo" /> */}
      <img src={banner} alt="Main Banner Organo" />
    </header>
  );
}

export default Banner;
