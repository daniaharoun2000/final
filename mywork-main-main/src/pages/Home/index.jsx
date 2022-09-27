import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./components/TopSaveToday.scss";
import "./components/Section1.scss";
import "./components/Section2.scss";
import "./components/Section3LeftPart.scss";
import "./components/Section3RightPart.scss";
import React from "react";
import ScrollButton from "./components/ScrollButton";
import "./components/BowsebyCategories.scss";
import "./components/fiftypercentoffer.scss";
import "./components/FoodCupboard.scss";
import "./components/CashBack.scss";
import "./components/SummerProducts.scss";
import "./components/OurBestSeller.scss";
import "./components/SummerVEGETABLE.scss";
import "./components/FeaturedBlog.scss";
import "./components/Newsletter.scss";
import Footer from "./Footer/index";
import "./Footer/Footer.scss";
import Cookies from "./components/Cookies";
import "./components/Cookies.scss";
import "./components/ScrollButton.scss";
import MobileMenu from "./components/MobileMenu";
import "./components/MobileMenu.scss";
import Newsletter from "./components/Newsletter";
function Home() {
  return (
    <div id="main-home" >
    
      <section>
        <Section1 />
      </section>
      <Cookies />
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
      <section>
        <Newsletter />
      </section>
      <section>
        <Footer />
      </section>
      <ScrollButton />
      <MobileMenu />
    </div>
  );
}

export default Home;
