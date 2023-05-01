import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const GalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-row", {
        itemSelector: ".gallery-column",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".gallery-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-12">
          <div className="gallery-filter-button text-center mb-60 wow fadeInDown">
            <ul className="filter-btn">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                Show All
              </li>
              <li
                data-filter=".cat-1"
                className={`c-pointer ${activeBtn("cat-1")}`}
                onClick={handleFilterKeyChange("cat-1")}
              >
                Birthday 
              </li>
              <li
                data-filter=".cat-2"
                className={`c-pointer ${activeBtn("cat-2")}`}
                onClick={handleFilterKeyChange("cat-2")}
              >
                Wedding 
              </li>
              <li
                data-filter=".cat-3"
                className={`c-pointer ${activeBtn("cat-3")}`}
                onClick={handleFilterKeyChange("cat-3")}
              >
                Party 
              </li>
              <li
                data-filter=".cat-4"
                className={`c-pointer ${activeBtn("cat-4")}`}
                onClick={handleFilterKeyChange("cat-4")}
              >
                Valentine Day 
              </li>
              <li
                data-filter=".cat-5"
                className={`c-pointer ${activeBtn("cat-5")}`}
                onClick={handleFilterKeyChange("cat-5")}
              >
                Blackforest
              </li>
              <li
                data-filter=".cat-5"
                className={`c-pointer ${activeBtn("cat-6")}`}
                onClick={handleFilterKeyChange("cat-6")}
              >
                Redvelvet 
              </li>
              <li
                data-filter=".cat-5"
                className={`c-pointer ${activeBtn("cat-7")}`}
                onClick={handleFilterKeyChange("cat-7")}
              >
                Chocolate
              </li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="row gallery-row">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="/assets/imgs/gellery/birthday4.jpeg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-3 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="/assets/imgs/gellery/birthday1.jpeg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2 cat-3  cat-4">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="/assets/imgs/gellery/banners-81.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-2  cat-3 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="/assets/imgs/gellery/banners-7.jpeg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="/assets/imgs/gellery/birthday3.jpeg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-5 cat-1 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/bk.webp"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
           
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-1 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/birthday2.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-2 cat-3 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/banners-8--.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-7">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/banners-622-.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-6">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/banner-14.png"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-2">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/banners-8-.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/banners-5.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-2 cat-3 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/blog-21-.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-7 cat-5">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/bk.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-3 cat-4 cat-6">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/v7.webp"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-3">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/blog-19.webp"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2 cat-3 cat-4">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/vd1.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2 cat-3 cat-4 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/vd.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-3">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/v9.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-2 cat-3">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/v8.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-2 cat-3 cat-4">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/v13.png"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 ">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/v1.png"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1 cat-2 cat-3 cat-4 cat-6">
          <div className="gallery-item-two mb-35 wow fadeInUp">
            <div className="gallery-img">
              <img
                src="assets/imgs/gellery/vd3.jpg"
                alt="Gallery Image"
              />
              <div className="hover-overlay">
                <a href="#" className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>





    </Fragment>
  );
};
export default GalleryIsotope;
