import Header from "../../components/Header";
import Banner from "./component/Banner";
import Community from "./component/Community";
import Earn from "./component/Earn";
import MetaSkyTeam from "./component/MetaSkyTeam";
import Organization from "./component/Organization";
import Services from "./component/Services";

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
    </div>
  );
};

export default Home;
