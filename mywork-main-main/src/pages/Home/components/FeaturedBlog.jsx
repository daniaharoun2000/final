
import { Carousel, Card, Stack, Col,Row } from "react-bootstrap";
import Container from "../../../components/Container";

function FeaturedBlog() {
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
      <div >
        <Container>
          <Row>
            <div className="title title-flex py-4 ">
              <div>
                <h2>Featured Blog</h2>

                <span className="title-leaf">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                    className="leafimg"
                  />
                </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>
            </div>
            <div className=" bg-opacity-25 container-fluid border-0">
              <Carousel style={{ height: 400 }}>
                {reviews.map((review, index) => (
                  <Carousel.Item style={{ height: 300 }}>
                    <Stack
                      direction="horizontal"
                      className="h-100 justify-content-center align-items-center"
               
                    >
                      <Card style={{ width: "397px" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="blog-detail.html"
                              className="category-box imgblog"
                              tabindex="-1"
                            ></a>

                            <a
                              href="blog-detail.html"
                              className="blog-detail"
                              tabindex="0"
                            >
                              <h6>20 March, 2022</h6>
                              <h5>Fresh Vegetable Online</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: "397px" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="blog-detail.html"
                              className="category-box imgblog2"
                              tabindex="-1"
                            ></a>
                            <a
                              href="blog-detail.html"
                              className="blog-detail"
                              tabindex="-1"
                            >
                              <h6>10 April, 2022</h6>
                              <h5>Fresh Combo Fruit</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card>{" "}
                      <Card style={{ width: "397px" }} className="border-0">
                        <Card.Body>
                          <Card.Text>
                            <a
                              href="blog-detail.html"
                              className="category-box imgblog3"
                              tabindex="-1"
                            ></a>
                            <a
                              href="blog-detail.html"
                              className="blog-detail"
                              tabindex="0"
                            >
                              <h6>10 April, 2022</h6>
                              <h5>Nuts to Eat for Better Health</h5>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Stack>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default FeaturedBlog;
