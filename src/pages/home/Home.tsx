import Header from "../../components/header/Header";
import Hero from "../hero/Hero";
import Searchbox from "./searchbox/Searchbox";
import "./Home.css";
import FeaturedPlace from "./featuredPlaces/FeaturedPlace";

function Home() {
  return (
    <div className="homepage">
      <Header></Header>
      <Hero></Hero>
      <Searchbox></Searchbox>
      <FeaturedPlace></FeaturedPlace>
    </div>
  );
}

export default Home;
