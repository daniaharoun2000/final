import Container from "../../../components/Container";
import { Col, Row } from "react-bootstrap";
import './SummerProducts.scss';
import svgg from "../images/arrowright.svg";

function SummerProducts() {
  return (
    <div >
   <Container>

   {/* <div className="section-t-space section-b-space"> */}
                        <div className="py-4 d-flex justify-content-center align-items-center" >
                        <Row >
        <Col xxl={8} xl={12 } lg={8 }md={7} sm={12}>
   
               
                                <div className="position-relative  blur-up  py-2" >
                                    <img src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/12.jpg"  className="w-100 " style={{minHeight:230}}alt="" />
                                    <div className=" textforimage2 position-absolute mt-4">
                                        <div>
                                            <h2 className=" fw-normal text-primary">Get Ready To</h2>
                                            <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                                            <p className=" banner-text">In publishing and graphic design, Lorem
                                                ipsum is a placeholder text commonly used to demonstrate.</p>
                                                <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn  mt-xxl-4 mt-2 home-button mend-auto text-overflow-1 bg-dd text-white "
                  >
                    Shop Now <img src={svgg} className="   text-overflow-1 " />
                  </button>   </div>
                                    </div>
                                </div>
              </Col>
              <Col  xxl={4} xl={12 } lg={4} md={5} sm={12}>
              <div className="position-relative  blur-up  py-2 ml-1" >

                                <a href="shop-left-sidebar.html" >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/13.jpg" className="w-100" style={{minHeight:230}} alt="" />
                                    <div className="   textforimage2 position-absolute mt-5">
                                        <div>
                                            <h2 className=" fw-normal text-dd">20% Off</h2>
                                            <h3 className="mt-2 mb-2 text-primary">SUMMRY</h3>
                                            <h3 className="fw-normal product-name ">Product</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                       </Col>
                    </Row>
                        </div>
                 
    </Container></div>
  );
}
export default SummerProducts;