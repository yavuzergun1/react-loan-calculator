import React from "react";
import Swiper from "../../components/swiper/Swiper";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home-body">
      <header>
        <Swiper />
      </header>

      <h1>Yapı Kredi'nin Avantajlı Kredi Oranları için </h1>
      <h2>
        {" "}
        <Link to="/form">Tıklayın</Link>
      </h2>
    </div>
  );
}

export default Home;
