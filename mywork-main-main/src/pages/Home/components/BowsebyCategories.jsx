import { Container } from "../../../components";

import { Carousel, Card, Stack, Col,Row } from "react-bootstrap";

function BowsebyCategories() {
  const reviews = [
    { _id: 1 },
    { _id: 2 },
    { _id: 3 },
    { _id: 4 },
    { _id: 5 },
    { _id: 6 },
    { _id: 7 },
    { _id: 8 },
    { _id: 9 },
  ];

  return (
    <div>
      <div>
        <Container><div  className=" py-4">
          <Row><Col xl={12}>
            <div className="title title-flex">
              <div>
                <h2>Bowse by Categories</h2>

                <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className=" icon-width"
              />
            </span>
                <p>Top Categories Of The Week</p>
              </div>
            </div>
            <div className=" bg-opacity-25 container-fluid border-0 justify-content-center align-items-center d-flex">
              <Carousel style={{ height: 200 }}>
                {reviews.map((review, index) => (
                  <Carousel.Item style={{ height: 200 }}>
                    <Stack
                      direction="horizontal"
                      className="h-100 justify-content-center align-items-center d-flex"
                
                    ><Row className="row-cols-xxl-5 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2"><Col>
                      <Card style={{ width: "10rem" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="shop-left-sidebar.html"
                              className="category-box"
                              tabindex="-1"
                            >
                              <img
                                src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Breakfast</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
                      <Col> <Card style={{ width: "10rem" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="shop-left-sidebar.html"
                              className="category-box"
                              tabindex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Frozen Foods</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
                      <Col>  <Card style={{ width: "14rem" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="shop-left-sidebar.html"
                              className="category-box"
                              tabindex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Milk & Dairies</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
                      <Col> <Card style={{ width: "10rem" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="shop-left-sidebar.html"
                              className="category-box"
                              tabindex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Pet Food</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>
                     
                      <Col>  <Card style={{ width: "10rem" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="shop-left-sidebar.html"
                              className="category-box"
                              tabindex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Meats &amp; Seafood</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col></Row >
                    </Stack>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div></Col>
          </Row></div>
        </Container>
      </div>
    </div>
  );
}
export default BowsebyCategories;
