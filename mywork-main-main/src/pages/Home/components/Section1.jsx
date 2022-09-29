import { Col, Row } from "react-bootstrap";

import svgg from "../images/rarrow.svg";
import Container from "../../../components/Container";
function Section1() {
  return (
    <div className="   align-items-center  ">
      <Container>
        <div className="py-2">
        <Row>
          <Col xl={8} md={12} lg={12}>
            <div className=" position-relative   imgonesectionone mt-0 gfg">
              <div className="textforimage2 position-absolute mt-5">
                <div>
                  <h6>
                    Exclusive offer
                    <span className="section130percent">30% Off</span>
                  </h6>
                  <h1 className="text-uppercase homecontain">
                    Stay home &amp; delivered your
                    <span className="text-primary">Daily Needs</span>
                  </h1>
                  <p className="w-75 d-none d-sm-block text-aa psection1">
                    Vegetables contain many vitamins and minerals that are good
                    for your health.
                  </p>
                  <button
                    onClick="location.href = 'shop-left-sidebar.html';"
                    className="btn  mt-xxl-4 mt-2 home-button mend-auto text-overflow-1  bg-dd text-white "
                  >
                    Shop Now 
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} className="colsection1 ">
            <Row>
              <Col xl={12} md={6} lg={6}>
                <div className=" position-relative mt-4 ">
                  <img
                    src=" https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/2.jpg"
                    className=" rounded border-light imgtwosectionone w-100"
                  />
                  <div className="textforimage2 position-absolute">
                    <div>
                      <h2 className="mt-4 text-dd ">
                        45% <span className="discount text-dania">OFF</span>
                      </h2>
                      <h3 className="text-primary">Nut Collection</h3>
                      <p className=" text-aa psection1">
                        We deliver organic vegetables &amp; fruits
                      </p>
                      <a href="shop-left-sidebar.html" >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={12} md={6} lg={6}>
                <div className=" position-relative mt-4 ">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/3.jpg"
                    className=" rounded border-light imgtwosectionone w-100"
                  />
                  <div className="textforimage2 position-absolute">
                    <div>
                      <h3 className="mt-4 text-primary fw-bold">
                        Healthy Food
                      </h3>
                      <h4 className="text-dd">Organic Market</h4>
                      <p className="organic text-aa psection1">
                        Start your daily shopping with some Organic food
                      </p>
                      <a href="shop-left-sidebar.html" >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row></div>
      </Container>
    </div>
  );
}
export default Section1;
