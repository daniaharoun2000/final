import Container from "../../../components/Container";
import {Row,Col,Carousel, Card, Stack} from "react-bootstrap";

import Rating from "./Rating";
import AddButton from "./AddButton";
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
  
      <div  >
        <Container>
          <div className="title title-flex py-4">
            <div>
              <h2>Food Cupboard</h2>

              <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className=" icon-width"
              />
            </span>
              <p>A virtual assistant collects the products from your list</p>
            </div>
          </div>
          {/* <Row className="row-cols-xxl-5 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
            <Col xl={12}> */}
              <Carousel style={{ height: 337 }}>
              {reviews.map((review, index) => (
                <Carousel.Item style={{ height: 336 }}>        

                  <Stack
                    direction="horizontal"
                    className=" justify-content-center align-items-center"
                  >
           <Row className="row-cols-xxl-5 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
                  <Col>
                    <Card style={{ width: "180px" }} className="border-0">
                        < Card.Body  className="p-0" >
                          <Card.Text>
                            <div className="p-3 border ">
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png"
                                className="w-100 margintoptodayimage  "
                                alt=""
                              />

                              <a href="product-left.html" tabindex="0">
                                <h6 className="name">
                                  Fantasy Crunchy Choco Chip Cookies
                                </h6>
                              </a>

                              <h5 className="sold text-content">
                                <span className="text-primary price">
                                  $26.69
                                </span>
                                <del className="dell">28.56</del>
                              </h5>

                              <div className="product-rating mt-2">
                                <Rating />
                              </div>
                              <AddButton />
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>  
                      <Col>    <Card style={{ width: "180px" }} className="border-0">
                        < Card.Body  className="p-0">
                          <Card.Text>
                            <div className="p-3 border ">
                              <img
                              src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/3.png"
                                className="w-100 margintoptodayimage  "
                                alt=""
                              />

                              <a href="product-left.html" tabindex="0">
                                <h6 className="name">
                                Peanut Butter Bite Premium Butter Cookies 600 g
                                </h6>
                              </a>

                              <h5 className="sold text-content">
                                <span className="text-primary price">
                                  $26.69
                                </span>
                                <del className="dell">28.56</del>
                              </h5>

                              <div className="product-rating mt-2">
                                <Rating />
                              </div>
                              <AddButton />
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>  
                      <Col>   <Card style={{ width: "180px" }} className="border-0">
                        < Card.Body  className="p-0">
                          <Card.Text>
                            <div className="p-3 border ">
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/5.png
                                "
                                className="w-100 margintoptodayimage  "
                                alt=""
                              />

                              <a href="product-left.html" tabindex="0">
                                <h6 className="name">
                                Yumitos Chilli Sprinkled Potato Chips 100 g
                                                        
                                </h6>
                              </a>

                              <h5 className="sold text-content">
                                <span className="text-primary price">
                                  $26.69
                                </span>
                                <del className="dell">28.56</del>
                              </h5>

                              <div className="product-rating mt-2">
                                <Rating />
                              </div>
                              <AddButton />
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>  
                      <Col>   <Card style={{ width: "180px" }} className="border-0">
                        < Card.Body  className="p-0">
                          <Card.Text>
                            <div className="p-3 border ">
                              <img
                                src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/6.png"
                                className="w-100 margintoptodayimage  "
                                alt=""
                              />

                              <a href="product-left.html" tabindex="0">
                                <h6 className="name">
                                Neu Farm Unpolished Desi Toor Dal 1 kg
                                </h6>
                              </a>

                              <h5 className="sold text-content">
                                <span className="text-primary price">
                                  $26.69
                                </span>
                                <del className="dell">28.56</del>
                              </h5>

                              <div className="product-rating mt-2">
                                <Rating />
                              </div>
                              <AddButton />
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card></Col>  
                      <Card style={{ width: "180px" }} className="border-0">
                        < Card.Body  className="p-0">
                          <Card.Text>
                            <div className="p-3 border ">
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/4.png"
                                className="w-100 margintoptodayimage  "
                                alt=""
                              />

                              <a href="product-left.html" tabindex="0">
                                <h6 className="name">
                                  Fantasy Crunchy Choco Chip Cookies
                                </h6>
                              </a>

                              <h5 className="sold text-content">
                                <span className="text-primary price">
                                  $26.69
                                </span>
                                <del className="dell">28.56</del>
                              </h5>

                              <div className="product-rating mt-2">
                                <Rating />
                              </div>
                              <AddButton />
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card></Row>
                  </Stack>
                </Carousel.Item>
              ))}
            </Carousel>
            {/* </Col></Row> */}
      
        </Container>
      </div>

  );
}
export default BowsebyCategories;
