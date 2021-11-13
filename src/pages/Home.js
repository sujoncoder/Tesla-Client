import BuyAndSell from "../components/Home/BuyAndSell/BuyAndSell";
import Footer from "../components/Home/Footer/Footer";
import Banner from "../components/Home/Banner/Banner";
import Review from "../components/Home/Review/Review";
import Navigation from "../components/shared/Navigation/Navigation";
import WhatWeDo from "../components/Home/WhatWeDo/WhatWeDo";
import Dellvered from "../components/Home/Dellvered/Dellvered";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <WhatWeDo />
      <BuyAndSell />
      <Dellvered />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
