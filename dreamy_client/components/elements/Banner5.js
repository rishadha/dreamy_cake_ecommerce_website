import React from "react";
import Link from "next/link"
const Banner5 = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <img src="/assets/imgs/banner/banner-4-.jpg" alt="" />
                    <div className="banner-text">
                        <h4>
                            Black Forest
                            <br />
                            Cake
                        </h4>
                        <Link href="/products"><a className="btn btn-xs">
                            Shop Now <i className="fi-rs-arrow-small-right"></i>
                        </a></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay=".2s"
                >
                    <img src="/assets/imgs/banner/banner-14.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            Redvelvat<br/> cake
                        </h4>
                        <Link href="/products"><a className="btn btn-xs">
                            Shop Now <i className="fi-rs-arrow-small-right"></i>
                        </a></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 d-md-none d-lg-flex">
                <div
                    className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".4s"
                >
                    <img src="/assets/imgs/banner/banner-6-.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            Cup <br/> Cake
                        </h4>
                        <Link href="/products"><a className="btn btn-xs">
                            Shop Now <i className="fi-rs-arrow-small-right"></i>
                        </a></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner5;
