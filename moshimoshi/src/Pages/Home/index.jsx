import Header from "../../components/Header";
import Banner from "./component/Banner";
import Community from "./component/Community";
import Earn from "./component/Earn";
import MetaSkyTeam from "./component/MetaSkyTeam";
import Organization from "./component/Organization";
import Services from "./component/Services";
import Web3 from "./component/Web3";
// import Web3 from "./component/Web3";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Services />
      <Earn />
      <Community />
      <Organization />
      <MetaSkyTeam />
      <Web3 />
    </div>
  );
};

export default Home;
