import BuyAndSell from "../components/Home/BuyAndSell/BuyAndSell";
import Review from "../components/Home/Review/Review";
import Navigation from "../components/shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <BuyAndSell></BuyAndSell>
      <Review />
    </>
  );
};

export default Home;
