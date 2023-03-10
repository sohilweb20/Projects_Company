import ClubLogo from "../../../../components/ClubLogo";
import DollorEuro from "../../../../components/DollorEuro";
import GamesLogo from "../../../../components/GamesLogo";
import LudoLogo from "../../../../components/LudoLogo";
import ServiceFive from "../../../../components/ServiceFive";
import ServiceFour from "../../../../components/ServiceFour";
import ServiceSix from "../../../../components/ServiceSix";
import ServiceThree from "../../../../components/Servicethree";
import ServiceTwo from "../../../../components/Servicetwo";
import WalletLogo from "../../../../components/WalletLogo";

const Services = () => {
  return (
    <div className="service-section">
      <div className="services service-one">
        <div className="head-section">
          <WalletLogo />

          <span className="skywallet">skyWallet</span>
        </div>
        <h2>Your everyday crypto wallet</h2>
        <ul className="features">
          <li></li>
          <li className="feature-two">
            <DollorEuro />
            <span>Use across any app and currency</span>
          </li>
          <li className="feature-three">
            <ServiceTwo />

            <span>One place for all your Web3 possessions</span>
          </li>
          <li className="feature-four">
            <ServiceFour />
            <span>Simple and secure</span>
          </li>
          <li className="feature-five">
            <ServiceThree />
            <span>Works everywhere</span>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="services service-two">
        <div className="head-section">
          <ClubLogo />
          <span>skyClub</span>
        </div>
        <h2>Exclusive, for you and your community</h2>
        <ul className="features">
          <li className="feature-two">
            <GamesLogo />
            <span>Chat, play games, and host events</span>
          </li>
          <li className="feature-three">
            <LudoLogo />
            <span>Create your own DAO and Tokens in 1 click</span>
          </li>
          <li></li>
          <li></li>
          <li className="feature-five">
            <ServiceFive />

            <span>Create eco-friendly NFT artwork and tickets </span>
          </li>
          <li className="feature-four">
            <ServiceSix />
            <span>Offer exclusive content and NFT memberships</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
