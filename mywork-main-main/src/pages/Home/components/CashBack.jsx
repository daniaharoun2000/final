import Container from "../../../components/Container";

import { Col, Row } from "react-bootstrap";

function CashBack() {
  return (
    <div >
      <Container>
        <Row>
          <Col xl={12} className="py-4">
            <div className="position-relative cashboxx d-flex justify-content-center align-items-center">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/15.jpg"
                className="w-100 img-fluid imgbootstrap "
                alt=""
              />

              <div className=" textforimage2 position-absolute align-items-center justify-content-center d-flex">
                <div>
                  <h3 className="fw-bold mb-2 cash-details d-flex justify-content-center align-items-center text-badge">
                    Get $3 Cashback! Min Order of $30
                  </h3>
                  <div className="d-flex justify-content-center align-items-center">
                    <h6 className="coupon-code py-2 m-auto text-badge ">
                      Use Code : GROCERY1920
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CashBack;
