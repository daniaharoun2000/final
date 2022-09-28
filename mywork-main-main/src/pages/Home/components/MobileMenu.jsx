import Container from "../../../components/Container";

import { Col, Row } from "react-bootstrap";

function MobileMenu() {
  return (
    <div className="mobile-menu bg-primary d-md-none d-block ">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="w-100">
              <div className=" mobile-cart   w-100">
                <ul>
                  <li className="mobile-category">
                    <a href="index.html">
                      <i className="iconly-Home icli"></i>
                  <span>Home</span>
                    </a>
                  </li>

                  <li className="mobile-category">
                    <a href="javascript:void(0)">
                      <i className="iconly-Category icli js-link"></i>
                      <span>Category</span>
                    </a>
                  </li>

                  <li>
                    <a href="search.html" className="search-box">
                      <i className="iconly-Search icli"></i>
                      <span>Search</span>
                    </a>
                  </li>

                  <li>
                    <a href="wishlist.html" className="notifi-wishlist">
                      <i className="iconly-Heart icli"></i>
                      <span>My Wish</span>
                    </a>
                  </li>

                  <li>
                    <a href="cart.html">
                      <i className="iconly-Bag-2 icli fly-cate"></i>
                      <span>Cart</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MobileMenu;
