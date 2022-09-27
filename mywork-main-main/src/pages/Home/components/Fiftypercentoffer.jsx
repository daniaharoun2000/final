import {Row,Col} from "react-bootstrap";
import svgg from "../images/arrowright.svg";
import Container from "../../../components/Container";



function Fiftypercentoffer() {
  return (
    <div >
    <Container>

 
        <Row   >
        <Col md={6}>
            <div className="banner-contain hover-effect py-4 justify-content-center align-items-center d-flex" >
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/9.jpg" className="" alt="" />
                <div className="banner-details p-center-left p-4 textforimage2 position-absolute">
                    <div>
                        <h3 className="text-exo">50% offer</h3>
                        <h4 className=" fw-normal  mb-2 text-primary">Testy Mushrooms</h4>
                        <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn  mt-xxl-4 mt-2 home-button mend-auto text-overflow-1 bg-dd text-white "
                  >
                    Shop Now 
                  </button>  </div>
                </div>
            </div></Col>
        
            <Col md={6}>
            <div className="banner-contain hover-effect" >
                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/10.jpg" className="" alt="" />
                <div className="banner-details p-center-left p-4 textforimage2 position-absolute">
                    <div>
                        <h3 className="text-exo">50% offer</h3>
                        <h4 className=" fw-normal  mb-2 text-primary">Testy Mushrooms</h4>
                        <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    className="btn  mt-xxl-4 mt-2 home-button mend-auto text-overflow-1 bg-dd text-white "
                  >
                    Shop Now <img src={svgg} className="   text-overflow-1 " />
                  </button></div>
                </div>
            </div></Col>
        
    
    </Row></Container></div>
  
  );
}
export default Fiftypercentoffer;