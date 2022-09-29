import Container from "../../../../components/Container";

import svgg from '../../images/arrowright.svg';

import { Col, Row } from "react-bootstrap";

function Newsletter() {
  return (
    <div >
      <Container>
        <div className="bgg d-flex justify-content-center align-items-center">
          <div className="py-5 ">
           <Container>
              <Row>
                <Col xl={12}>
                  <div >
                    <h2 className="text-badge">
                      Join our newsletter and get...
                    </h2>
                    <h5 className="text-yellow">
                      $20 discount for your first order
                    </h5>
                    <div >
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Email"
                      />
                      <button
                        onclick="location.href = 'shop-left-sidebar.html';"
                        className="btn mt-xxl-4 mt-2 home-button mend-auto text-overflow-1 bg-dd text-white "
                      >
                      Subscribe
                        <img src={svgg} className="   text-overflow-1 " />
                      </button>
                     
                    </div>
                  </div>
                </Col>
              </Row>
              </Container>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Newsletter;
