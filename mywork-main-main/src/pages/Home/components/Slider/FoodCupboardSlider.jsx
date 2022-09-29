import { Autoplay, Thumbs, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "../../../../components";
import { Col, Row } from "react-bootstrap";

import Rating from "../Rating";
import AddButton from "../AddButton";
export default function FoodCupboardSlider() {
  return (
    <>
      <div>
        <div>
          <Container>
            <div className=" py-4">
              <Row>
                <Col xl={12}>
                  <div className="title title-flex py-4">
                    <div>
                      <h2>Food Cupboard</h2>

                      <span className="title-leaf">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                          className=" icon-width"
                        />
                      </span>
                      <p>
                        A virtual assistant collects the products from your list
                      </p>
                    </div>
                  </div>
                  <Swiper
                    spaceBetween={0}
                    // slidesPerView={7}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay, Pagination, Navigation, Lazy]}
                    autoplay={{ delay: 2000 }}
                    lazy={true}
                    pagination={{
                      el: ".swiper-pagination",
                      type: "bullets",
                      clickable: true,
                    }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    loop={true}
                    breakpoints={{
                       320: {
                            slidesPerView:2,
                          },
                      661: {
                        slidesPerView:3,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                      
                  1200:{
                    slidesPerView: 3,

                  },
                     1440:{
                        slidesPerView: 4,

                     },
                      1800: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="p-3 border ">
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/4.png"
                                className="w-100 margintoptodayimage  "
                                alt=""
                              />

                              <a href="product-left.html" tabindex="0">
                                <h6 className="name">
                                  Chips
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
                    </SwiperSlide>
     
                  </Swiper>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
