import Circle from "../../../../components/Circle";
import Stars from "../../../../components/Stars";
import ProfileFigure from "../../../../components/ProfileFigure";
import KiteLogo from "../../../../components/KiteLogo";
import Wireone from "../../../../components/Wireone";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner-content">
          <h1>The Web3 Platform Built for You</h1>
          <Circle />
          <Stars />
          <ProfileFigure />
          <KiteLogo />
          {/* <Wireone /> */}
          <ul className="banner-nav">
            <li>
              <a href="/">Skyclub</a>
            </li>
            <li>
              <a href="/">Sky Wallet</a>
            </li>
            <li>
              <a href="/">Contact Now</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
