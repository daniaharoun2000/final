import { Container } from "../../../../../components";
import { Col, Row } from "react-bootstrap";

import svgg from '../../../images/arrowright.svg';

function SummerProducts() {
  return (
    <div >
   <Container><div className="py-4">
    <Row><Col xl={12}>
                        <div className=" imgsummerveg position-relative d-flex justify-content-center align-items-center" >
                            <div className="     textforimage2 mt-1 align-items-center justify-content-center d-flex">
                                <div >
                                    <h6 className="ls-expanded  text-primary mb-1 align-items-center justify-content-center d-flex">SUMMER</h6>
                                    <h2 className="banner-title ">VEGETABLE</h2>
                                    <h5 className="lh-sm mx-auto mt-1  align-items-center justify-content-center d-flex text-aa">Save up to 5% OFF</h5>
                                    <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className=" mt-2 btn  bg-dd  text-white m-auto  "
                  >
                    Shop Now <img src={svgg} className="   text-overflow-1 " />
                  </button>    </div>
                            </div>
               
                    </div></Col></Row></div>
   </Container>
   </div>
  );
}
export default  SummerProducts;