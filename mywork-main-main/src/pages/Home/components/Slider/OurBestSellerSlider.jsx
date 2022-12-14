//Our Best Seller Section from Right Part on Home Page by Dania Haroun !!!

import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "../../../../components";
import { Col, Row } from "react-bootstrap";

export default function OurBestSellerSlider() {
    
    
  return (
    <>
      <div>
        <div>
          <Container>
            <div className=" py-4">
              <Row>
                <Col xl={12}>
                  <div className="title d-block py-4">
                    <div>
                      <h2>Our best Seller</h2>
                      <span className="title-leaf">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                          className=" icon-width" alt="ourbest seller"
                        />
                      </span>
                      <p>
                        A virtual assistant collects the products from your list
                      </p>
                    </div>
                  </div>
                  <div className=" d-lg-none d-xxl-none d-xl-block d-md-block d-xs-block">
                    <Swiper
                    
                      spaceBetween={10}
                      // slidesPerView={7}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                      modules={[Autoplay, Pagination, Navigation, Lazy]}
                      autoplay={{ delay: 2000 }}
                      lazy={true}
                      pagination={{
                        el: '.slider__pagination',
                        clickable: true,
                      }}
                      
                      loop={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="slick-slide slick-current slick-active ">
                          <ul className="product-list  p-3 border rounded-3">
                            <li  className=" mb-4  mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Tuffets Whole Wheat Bread
                                      </span>
                                    </a>
                                    <span >500 G</span><br/>
                                    <span className="price text-primary mb-4 ">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className=" mb-4  mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/12.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">Potato</span>
                                    </a>
                                    <span >500 G</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className=" mb-4  mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/13.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">Green Chilli</span>
                                    </a>
                                    <span >200 G</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/14.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Muffets Burger Bun
                                      </span>
                                    </a>
                                    <span >150 G</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div
                          className="slick-slide slick-active "
                          tabindex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                          <ul className="product-list  p-3 border rounded-3 cheeza">
                            <li  className=" mb-4  mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/15.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Tuffets Britannia Cheezza
                                      </span>
                                    </a>
                                    <span >500 G</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li >
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/16.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Long Life Toned Milk
                                      </span>
                                    </a>
                                    <span >1 L</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className=" mb-4  mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/17.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Organic Tomato
                                      </span>
                                    </a>
                                    <span >1 KG</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/18.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">Organic Jam</span>
                                    </a>
                                    <span >150 G</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div
                          className="slick-slide slick-active  "
                          tabindex="0"
                          data-slick-index="2"
                          aria-hidden="false"
                        >
                          <ul className="product-list  p-3 border rounded-3 ">
                            <li  className=" mb-4  mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/19.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Good Life Refined Sunflower Oil
                                      </span>
                                    </a>
                                    <span >1 L</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className=" mb-4  mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/20.png
"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Good Life Raw Peanuts
                                      </span>
                                    </a>
                                    <span >500 G</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className=" mb-4 mt-2 ">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/21.png
"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        TufBest Farms Moong Dal
                                      </span>
                                    </a>
                                    <span >1 KG</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="mt-2">
                              <div className="offer-product">
                                <a
                                  href="/"
                                  className="offer-image"
                                  tabindex="0"
                                >
                                  <img
                                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/22.png"
                                    className="blur-up lazyloaded imghovering me-2"
                                    alt=""
                                  />
                                </a>

                                <div className="offer-detail">
                                  <div>
                                    <a
                                      href="/"
                                      className="text-title"
                                      tabindex="0"
                                    >
                                      <span className="cardname">
                                        Frooti Mango Drink
                                      </span>
                                    </a>
                                    <span >160 ML</span><br/>
                                    <span className="price text-primary mb-4">
                                      $ 10.00
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </SwiperSlide>
                      <div className="slider__controls">

<div className="slider__pagination"></div>


</div>  
                    </Swiper>
                    
                  </div>
                  <div className="d-none  d-xxl-block d-xl-none d-lg-block d-md-none ">
                    <div className="best-selling-slider product-wrapper wow fadeInUp slick-initialized slick-slider ">
                      <div className="slick-list draggable  ">
                        <div className="slick-track">
                          <Row className="row-cols-xxl-3 row-cols-xl-2 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1  ">
                            <Col>
                              <ul className="product-list  p-3 border rounded-3  ">
                                <li className=" mb-4  mt-2">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Tuffets Whole Wheat Bread
                                          </span><br/>
                                        </a>
                                        <span className="mt-1">500 G</span><br/>
                                        <span className="price text-primary mb-4 ">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className=" mb-4  mt-2">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/12.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">Potato</span>
                                        </a><br/>
                                        <span className="mt-1" >500 G</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className=" mb-4 mt-2 ">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/13.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Green Chilli
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">200 G</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className="mt-2">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/14.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Muffets Burger Bun
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">150 G</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </Col>
                            <Col>
                              <ul className="product-list  p-3 border rounded-3">
                                <li className=" mb-4 mt-2 ">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/15.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Tuffets Britannia Cheezza
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">500 G</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className=" mb-4 mt-2 ">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/16.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Long Life Toned Milk
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">1 L</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className=" mb-4 mt-2 ">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/17.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Organic Tomato
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">1 KG</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className="mt-2">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/18.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Organic Jam
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">150 G</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </Col>
                            <Col>
                              <ul className="product-list  p-3 border rounded-3">
                                <li className=" mb-4  mt-2">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/19.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Good Life Refined Sunflower Oil
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">1 L</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className=" mb-4 mt-2 ">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/20.png
    "
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Good Life Raw Peanuts
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">500 G</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className=" mb-4 mt-2 ">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/21.png
    "
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            TufBest Farms Moong Dal
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">1 KG</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li className="mt-2">
                                  <div className="offer-product">
                                    <a
                                      href="/"
                                      className="offer-image"
                                      tabindex="0"
                                    >
                                      <img
                                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/22.png"
                                        className="blur-up lazyloaded imghovering me-2"
                                        alt=""
                                      />
                                    </a>

                                    <div className="offer-detail">
                                      <div>
                                        <a
                                          href="/"
                                          className="text-title"
                                          tabindex="0"
                                        >
                                          <span className="cardname">
                                            Frooti Mango Drink
                                          </span>
                                        </a><br/>
                                        <span className="mt-1">160 ML</span><br/>
                                        <span className="price text-primary mb-4">
                                          $ 10.00
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
