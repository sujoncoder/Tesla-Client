import BuyAndSell from "../components/Home/BuyAndSell/BuyAndSell";
import Footer from "../components/Home/Footer/Footer";
import Banner from "../components/Home/Banner/Banner";
import Review from "../components/Home/Review/Review";
import Navigation from "../components/shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <BuyAndSell />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
