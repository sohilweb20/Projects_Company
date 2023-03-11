import Header from "../../components/Header";
import Banner from "./component/Banner";
import Services from "./component/Services";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
