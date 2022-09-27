//Section 1 by Dania Haroun !!!
//Footer
import Container from "../../../../components/Container";

import {Row,Col} from "react-bootstrap";


function Section1() {
  return (
    <div >
      <div>
        <Container >
          <div className="py-2 d-none d-sm-none d-md-block ">
          <div className=" d-xxl-block d-none py-4">
            {/* //d-xxl-block d-none */}
          <div className="service-contain">   
              <div >           <Row className="lineundersection  ">

                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail">

                      <h5>Every Fresh Products</h5>
                      
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail"><span className="oneshapeline"></span>

                      <h5>Free Delivery For Order Over $50</h5>
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail"><span className="oneshapeline"></span>

                      <h5>Daily Mega Discounts</h5>
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box justify-content-end d-flex">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail"><span className="oneshapeline"></span>

                      <h5>Best Price On The Market</h5>
                    </div>
                  </div>
                </Col></Row>
              </div>
            </div>
          </div>
          <div className="  d-lg-block d-xl-block d-xxl-none ">
          
              <div >  <Row >
                <Col xl={6} lg={6} md={6}>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail">

                      <h5>Every Fresh Products</h5>
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6}>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail"><span className="oneshapeline"></span>

                      <h5>Free Delivery For Order Over $50</h5>
                    </div>
                  </div>
                </Col> </Row><Row className="lineundersection ">
                <Col  xl={6} lg={6} md={6}>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail">
                        

                      <h5>Daily Mega Discounts</h5>
                    </div>
                  </div>
                </Col>
                <Col  xl={6} lg={6} md={6}>
                  <div className="service-box justify-content-end d-flex">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail"><span className="oneshapeline"></span>

                      <h5>Best Price On The Market</h5>
                    </div>
                  </div>
                </Col></Row>
              </div>
           
          </div></div>
        </Container>
      </div>
    </div>
  );
}
export default Section1;
