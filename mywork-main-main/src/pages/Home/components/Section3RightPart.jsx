import CountdownTimer from "./CountdownTimer";
import TopSaveToday from "./TopSaveToday";
import Container from "../../../components/Container";
import { Row, Col } from "react-bootstrap";

import BowsebyCategories from "./BowsebyCategories";
import Fiftypercentoffer from "./Fiftypercentoffer";
import FoodCupboard from "./FoodCupboard";
import CashBack from "./CashBack";
import SummerProducts from "./SummerProducts";
import OurBestSeller from "./OurBestSeller";
import SummerVEGETABLE from "./SummerVEGETABLE";
import FeaturedBlog from "./FeaturedBlog";
function Section3RightPart() {
  const THREE_DAYS_IN_MS = 333 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div >
      <Container> <Row>
          <Col xxl={6 }xl={6}xs={12} md={12}>   <div className="title title-flex">
          <div>
            <h2>Top Save Today</h2>

            <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className="leafimg"
              />
            </span>
            <p>
              Don't miss this opportunity at a special discount just for this
              week.
            </p>
          </div>
        </div></Col>
         
     
       
          <Col xxl={6} xl={6} xs={12} md={12} className="d-flex justify-content-end ">
            <div className=" align-items-center w-75 justify-content-center d-flex bg-dd text-badge border border-light rounded timeboxsection3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="timingsvg "
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="  name align-items-center justify-content-center d-flex">Expires in :</span>

              <CountdownTimer targetDate={dateTimeAfter333Days} />
            </div>
          </Col>
        </Row>

        <TopSaveToday />
        <BowsebyCategories />
        <Fiftypercentoffer />
        <FoodCupboard />
        <CashBack />
        <SummerProducts />
        <OurBestSeller />
        <SummerVEGETABLE />
        <FeaturedBlog />
       
      </Container>
    </div>
  );
}
export default Section3RightPart;
