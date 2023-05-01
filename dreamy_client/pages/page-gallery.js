import Layout from "../components/layout/Layout";

import dynamic from "next/dynamic";
const GalleryIsotope = dynamic(
  () => import("../components/ecommerce/GalleryIsotope"),
  { ssr: false }
);

function gallery() {
  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Contact">
        <section className="gallery-section pt-120 pb-90" id="gallery-filter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title text-center mb-50 wow fadeInUp">
                 
                  <h2>Look Inside Photo Gallery</h2>
                </div>
              </div>
            </div>
            <GalleryIsotope />
          </div>
        </section>{" "}
      </Layout>
    </>
  );
}

export default gallery;
