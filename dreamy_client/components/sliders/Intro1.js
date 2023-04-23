import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const Intro1 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}

                pagination={true}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/red3.jpg)",
                        }}
                    >
                        <div className="slider-content">
                            <h1 className="display-2 mb-40">
                                Don’t miss amazing
                                <br />
                                Tasty Cakes
                            </h1>
                            <p className="mb-65">
                                Sign up for the Order
                            </p>
                            <form className="form-subcriber d-flex">
                                <input
                                    type="email"
                                    placeholder="Your emaill address"
                                />
                                <button className="btn" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:
                                "url(assets/imgs/slider/slider-2.jpg)",
                        }}
                    >
                        <div className="slider-content">
                            <h1 className="display-2 mb-40">
                                Love At
                                <br />
                                First Bite
                            </h1>
                            <p className="mb-65">
                                Save up to 20% off on your first order
                            </p>
                            <form className="form-subcriber d-flex">
                                <input
                                    type="email"
                                    placeholder="Your emaill address"
                                />
                                <button className="btn" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro1;
