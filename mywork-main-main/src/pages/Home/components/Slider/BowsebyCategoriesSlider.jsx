import { Autoplay, Thumbs, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "../../../../components";
import { Col,Row } from "react-bootstrap";

export default function BowsebyCategoriesSlider() {
  return (
    <>
        <div>
      <div>
        <Container>
          <div  className=" py-4">
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
            slidesPerView: 2,
          },
          425: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 6,
          },
          1800: {
            slidesPerView: 7,
          }
        
        }}
      >
        <SwiperSlide>     <a
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
                            </a></SwiperSlide>
        <SwiperSlide>     <a
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
                            </a></SwiperSlide>
        <SwiperSlide>    <a
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
                            </a></SwiperSlide>
        <SwiperSlide>        <a
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
                            </a></SwiperSlide>
        <SwiperSlide>   <a
                              href="shop-left-sidebar.html"
                              className="category-box"
                              tabindex="-1"
                            >
                              <img
                                src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Beverages </h5>
                            </a></SwiperSlide>
        <SwiperSlide>   <a
                              href="shop-left-sidebar.html"
                              className="category-box"
                              tabindex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Vegetables & Fruit</h5>
                            </a></SwiperSlide>
        <SwiperSlide>   <a
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
                            </a></SwiperSlide>

      </Swiper></Col></Row>
      </div></Container></div></div>
    </>
  );

}