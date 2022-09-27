import { Container } from "../../../components";
import { Col, Row } from "react-bootstrap";

import Newsletter from "./Newsletter";
function Section4() {
  return (
    <div >
      <Container>
        <section className="banner-section ">
          <div>
            <Row>
              <Col xl={12}>
                <Newsletter />
              </Col>
              {/* <Col xxl={9} xl={8}>< Section4RightPart/></Col> */}
            </Row>
          </div>
        </section>
      </Container>
    </div>
  );
}
export default Section4;
