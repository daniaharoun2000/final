//Section 1 by Dania Haroun !!!
//Footer
import Container from "../../../../components/Container";

import {Row,Col} from "react-bootstrap";


function Section1() {
  return (
    <div >
      <div>
        <Container >
          <div className=" d-none d-sm-none d-md-block mt-5  ">
          <div className=" d-xxl-block d-none ">
            {/* //d-xxl-block d-none */}
          <div className="service-contain">   
              <div >           <Row className="lineundersection py-4 ">

                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                        className="blur-up lazyloaded "
                        alt=""
                      />
                    </div>

                     <div className="service-detail  mx-2">

                      <span>Every Fresh Products</span>
                      
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div className="service-image ">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2"><span className="oneshapeline"></span>

                      <span>Free Delivery For Order Over $50</span>
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

                     <div className="service-detail mx-2"><span className="oneshapeline"></span>

                      <span>Daily Mega Discounts</span>
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

                     <div className="service-detail mx-2"><span className="oneshapeline"></span>

                      <span>Best Price On The Market</span>
                    </div>
                  </div>
                </Col></Row>
              </div>
            </div>
          </div>

          <div className="  d-lg-block d-xl-block d-xxl-none ">
          
              <div className="" > 
                 <Row >   
                <Col xl={6} lg={6} md={6}>
                  <div className="service-box">
                    <div className="d-flex justify-content-center align-items-center ">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2 ">

                      <span>Every Fresh Products</span>
                    </div>
                  </div></div>
                </Col>
                <Col xl={6} lg={6} md={6}>
                  <div className="service-box ">  <div className="d-flex justify-content-center align-items-center ">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2"><span className="oneshapeline"></span>

                      <span>Free Delivery For Order Over $50</span>
                    </div></div>
                  </div>
                </Col> </Row>
                <Row className="lineundersection ">
                <Col  xl={6} lg={6} md={6}>
                  <div className="service-box">  <div className="d-flex justify-content-center align-items-center ">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">
                        

                      <span>Daily Mega Discounts</span>
                    </div>
                  </div></div>
                </Col>
                <Col  xl={6} lg={6} md={6}>
                  <div className="service-box justify-content-end d-flex">  <div className="d-flex justify-content-center align-items-center ">
                    <div className="service-image">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2"><span className="oneshapeline"></span>

                      <span>Best Price On The Market</span>
                    </div></div>
                  </div>
                </Col>
      
                </Row>
              </div>
           
          </div></div>
        </Container>
      </div>
    </div>
  );
}
export default Section1;
