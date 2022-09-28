import {Row,Col} from "react-bootstrap";
import svgg from "../images/arrowright.svg";
import Container from "../../../components/Container";



function Fiftypercentoffer() {
  return (
    <div >
    <Container>

 
        <Row   >
        <Col xl={6} md={6}>
            <div className="coverimageonefifty banner-contain  justify-content-center align-items-center d-flex" >
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/9.jpg" className="border-light rounded" alt="" />
                <div className="banner-details p-center-left p-4 textforimage2 position-absolute">
                    <div>
                        <h3 className="text-exo">50% offer</h3>
                        <h4 className=" fw-normal  mb-1 text-primary">Testy Mushrooms</h4>
                        <button
                    className="btn  mt-xxl-4 mb-1 text-overflow-1 bg-dd text-white"
                  >
                    Shop Now 
                  </button>  </div>
                </div>
            </div></Col>
        
            <Col xl={6}  md={6}>
            <div className="coverimagetwofifty banner-contain " >
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/10.jpg" className="border-light rounded" alt="" />
                <div className=" textforimage2 position-absolute">
                    <div>
                        <h3 >50% offer</h3>
                        <h4 className=" fw-normal  mb-1 text-primary">Testy Mushrooms</h4>
                        <button
                    className="btn  mt-xxl-4 mb-1 text-overflow-1 bg-dd text-white "
                  >
                    Shop Now <img src={svgg} className="   text-overflow-1 " />
                  </button></div>
                </div>
            </div></Col>
        
    
    </Row></Container></div>
  
  );
}
export default Fiftypercentoffer;