import { Autoplay, Thumbs, Pagination, Navigation, Lazy } from "swiper";
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
                          className=" icon-width"
                        />
                      </span>
                            <p>A virtual assistant collects the products from your list</p>
                        </div>
                    </div>
                    <div className=" d-lg-none d-xxl-none d-xl-none">
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
                            slidesPerView:1,
                          },
                      768: {
                        slidesPerView:2,
                      },
                    
                    }}
                  >
                    <SwiperSlide>
                    <div className="slick-slide slick-current slick-active" >
                                <ul className="product-list  p-3 border rounded-3">
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Tuffets Whole Wheat Bread</span>
                                                    </a>
                                                    <span>500 G</span>
                                                    <span className="price text-primary mb-4 ">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/12.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Potato</span>
                                                    </a>
                                                    <span>500 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/13.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Green Chilli</span>
                                                    </a>
                                                    <span>200 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li >
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/14.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Muffets Burger Bun</span>
                                                    </a>
                                                    <span>150 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slick-slide slick-active" tabindex="0" data-slick-index="1" aria-hidden="false">
                            <ul className="product-list  p-3 border rounded-3">
                                <li className="line mb-4  ">
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/15.png" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">Tuffets Britannia Cheezza</span>
                                                </a>
                                                <span>500 G</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="line mb-4  ">
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/16.png" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">Long Life Toned Milk</span>
                                                </a>
                                                <span>1 L</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="line mb-4  ">
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/17.png" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">Organic Tomato</span>
                                                </a>
                                                <span>1 KG</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li >
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/18.png" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">Organic Jam</span>
                                                </a>
                                                <span>150 G</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slick-slide slick-active "  tabindex="0" data-slick-index="2" aria-hidden="false">
                            <ul className="product-list  p-3 border rounded-3">
                                <li className="line mb-4  ">
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/19.png" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">Good Life Refined Sunflower Oil</span>
                                                </a>
                                                <span>1 L</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="line mb-4  ">
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/20.png
" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">Good Life Raw Peanuts</span>
                                                </a>
                                                <span>500 G</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="line mb-4  ">
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/21.png
" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">TufBest Farms Moong Dal</span>
                                                </a>
                                                <span>1 KG</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li >
                                    <div className="offer-product">
                                        <a href="product-left.html" className="offer-image" tabindex="0">
                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/22.png" className="blur-up lazyloaded" alt=""/>
                                        </a>

                                        <div className="offer-detail">
                                            <div>
                                                <a href="product-left.html" className="text-title" tabindex="0">
                                                    <span className="name">Frooti Mango Drink</span>
                                                </a>
                                                <span>160 ML</span>
                                                <span className="price text-primary mb-4">$ 10.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
               
                  </Swiper>
                  </div>
                  <div className="d-none d-lg-block ">  
                      <div className="best-selling-slider product-wrapper wow fadeInUp slick-initialized slick-slider ">
                        

                    
                        <div className="slick-list draggable  ">
                            <div className="slick-track" > 
                              <Row className="row-cols-xxl-3 row-cols-xl-2 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
    
    <Col>
                                <div className="slick-slide slick-current slick-active" >
                                <ul className="product-list  p-3 border rounded-3">
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Tuffets Whole Wheat Bread</span>
                                                    </a>
                                                    <span>500 G</span>
                                                    <span className="price text-primary mb-4 ">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/12.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Potato</span>
                                                    </a>
                                                    <span>500 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/13.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Green Chilli</span>
                                                    </a>
                                                    <span>200 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li >
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/14.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Muffets Burger Bun</span>
                                                    </a>
                                                    <span>150 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div></Col>
                            <Col>
                            <div className="slick-slide slick-active" tabindex="0" data-slick-index="1" aria-hidden="false">
                                <ul className="product-list  p-3 border rounded-3">
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/15.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Tuffets Britannia Cheezza</span>
                                                    </a>
                                                    <span>500 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/16.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Long Life Toned Milk</span>
                                                    </a>
                                                    <span>1 L</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/17.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Organic Tomato</span>
                                                    </a>
                                                    <span>1 KG</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li >
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/18.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Organic Jam</span>
                                                    </a>
                                                    <span>150 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div></Col>
                            <Col>
                            <div className="slick-slide slick-active "  tabindex="0" data-slick-index="2" aria-hidden="false">
                                <ul className="product-list  p-3 border rounded-3">
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/19.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Good Life Refined Sunflower Oil</span>
                                                    </a>
                                                    <span>1 L</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/20.png
    " className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Good Life Raw Peanuts</span>
                                                    </a>
                                                    <span>500 G</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li className="line mb-4  ">
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/21.png
    " className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">TufBest Farms Moong Dal</span>
                                                    </a>
                                                    <span>1 KG</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
    
                                    <li >
                                        <div className="offer-product">
                                            <a href="product-left.html" className="offer-image" tabindex="0">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/22.png" className="blur-up lazyloaded" alt=""/>
                                            </a>
    
                                            <div className="offer-detail">
                                                <div>
                                                    <a href="product-left.html" className="text-title" tabindex="0">
                                                        <span className="name">Frooti Mango Drink</span>
                                                    </a>
                                                    <span>160 ML</span>
                                                    <span className="price text-primary mb-4">$ 10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div></Col></Row></div></div></div></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
