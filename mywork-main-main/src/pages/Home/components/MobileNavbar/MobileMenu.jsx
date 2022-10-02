import Container from "../../../../components/Container";
import { Col, Row } from "react-bootstrap";
import catigoriesicon from '../../images/catigories.png';
import homeicon from '../../images/homeicon.png';
import favorite from '../../images/favorite.png';
import cart from '../../images/cart.png';
import search from '../../images/search.png';

function MobileMenu() {
  return (
    <div className="mobile-menu bg-primary d-md-none d-block ">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="w-100">
              <div className=" mobile-cart w-100">
                <ul>
                  <li className="mobile-category active">
                    <a href="index.html">
<img src={homeicon} className="iconsizemobile"/>
                  <span>Home</span>
                    </a>
                  </li>

                  <li className="mobile-category">
                    <a href="javascript:void(0)">
                    <img src={catigoriesicon} className="iconsizemobile"/>
                      <span>Category</span>
                    </a>
                  </li>

                  <li>
                    <a href="search.html" className="search-box">
                    <img src={search} className="iconsizemobile"/>
                      <span>Search</span>
                    </a>
                  </li>

                  <li>
                    <a href="wishlist.html" className="notifi-wishlist">
                    <img src={favorite} className="iconsizemobile"/>
                      <span>My Wish</span>
                    </a>
                  </li>

                  <li>
                    <a href="cart.html">
                    <img src={cart} className="iconsizemobile"/>
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
