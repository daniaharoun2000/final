import { Col, Row } from "react-bootstrap";

import svgg from "../images/rarrow.svg";
import Container from "../../../components/Container";
function Section1() {
  return (
    <div className="  mt-4 align-items-center  ">
      <Container>
        <Row>
          <Col xl={8}>
            <div className=" position-relative   ">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/1.jpg"
                className="  rounded border-light imgonesectionone w-100"
              />
              <div className="textforimage2 position-absolute">
                <div>
                  <h6>
                    Exclusive offer{" "}
                    <span className="section130percent">30% Off</span>
                  </h6>
                  <h1 className="text-uppercase homecontain">
                    Stay home &amp; delivered your{" "}
                    <span className="text-primary">Daily Needs</span>
                  </h1>
                  <p className="w-75 d-none d-sm-block text-aa psection1">
                    Vegetables contain many vitamins and minerals that are good
                    for your health.
                  </p>
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn  mt-xxl-4 mt-2 home-button mend-auto text-overflow-1 w-25 bg-dd text-white "
                  >
                    Shop Now <img src={svgg} className=" w-25 pl-1" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} className="colsection1 ">
            <Row className="gap-4">
              <Col xl={12} md={5} lg={5}>
                <div className=" position-relative ">
                  <img
                    src=" https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/2.jpg"
                    className=" rounded border-light imgtwosectionone w-100"
                  />
                  <div className="textforimage2 position-absolute">
                    <div>
                      <h2 className="mt-0 text-dd">
                        45% <span className="discount text-dania">OFF</span>
                      </h2>
                      <h3 className="text-primary">Nut Collection</h3>
                      <p className=" text-aa psection1">
                        We deliver organic vegetables &amp; fruits
                      </p>
                      <a href="shop-left-sidebar.html" className="shop-button">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={12} md={5} lg={5}>
                <div className=" position-relative ">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/3.jpg"
                    className=" rounded border-light imgtwosectionone w-100"
                  />
                  <div className="textforimage2 position-absolute">
                    <div>
                      <h3 className="mt-0 text-primary fw-bold">
                        Healthy Food
                      </h3>
                      <h4 className="text-dd">Organic Market</h4>
                      <p className="organic text-aa psection1">
                        Start your daily shopping with some Organic food
                      </p>
                      <a href="shop-left-sidebar.html" className="shop-button">
                        Shop Now
                      </a>
                    </div>
                  </div>{" "}
                </div>{" "}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section1;
