import { Switch } from "react-router";
import BuyAndSell from "../components/Home/BuyAndSell/BuyAndSell";
import Navigation from "../components/shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <BuyAndSell></BuyAndSell>
    </>
  );
};

export default Home;
