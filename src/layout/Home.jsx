import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Success from "../components/Success";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <Success></Success>
      </section>
    </div>
  );
};

export default Home;
