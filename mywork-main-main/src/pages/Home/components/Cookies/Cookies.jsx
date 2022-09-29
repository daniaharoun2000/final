import { Container } from "../../../../components";
import { useState } from "react";

import { Col, Row, Button } from "react-bootstrap";

function Cookies() {
  const [hidecookiesbox, sethidecookiesbox] = useState(true);

  return (
    <div className={`lightbox ${hidecookiesbox ? "cookie-bar-box" : "hhide"}`}>
      <Container>
        <Row>
          <Col>
            <div>
              <div className="cookie-box ">
                <div className="cookie-image">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/cookie-bar.png"
                    className="align-items-center justify-content-center d-flex"
                    alt=""
                  />
                  <h2>Cookies!</h2>
                </div>

                <div className="cookie-contain">
                  <h5 className="text-content">
                    We use cookies to make your experience better
                  </h5>
                </div>
              </div>

              <div className="Button-group">
                <Button className="cookiesbutton privacy-Button align-items-center justify-content-center d-flex">
                  Privacy Policy
                </Button>
                <Button
                  className="cookiesbutton ok-Button bg-primary align-items-center justify-content-center d-flex  "
                  onClick={() => sethidecookiesbox(false)}
                >
                  OK
                </Button>
                {/* //onClick={closebutton} */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cookies;
