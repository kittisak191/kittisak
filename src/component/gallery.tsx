import "./gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";
import AOS from "aos";

function Gallery() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />
      <div className="container gallery-container text-center">
        <div data-aos="fade-up" data-aos-duration="2500">
          <h1>Gallery</h1>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide home-carousel-slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div data-aos="zoom-out" data-aos-duration="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/img/slide1.jpg "
                  className="d-block w-100 img-fuild carousel-image "
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/slide2.jpg"
                  className="d-block w-100 img-fuild carousel-image "
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/slide3.jpg"
                  className="d-block w-100 img-fuild carousel-image "
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container ">
        <div className="row row-gallery">
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-1"
                src="/img/gallery1.jpg"
              />
            </div>
          </div>
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-2"
                src="/img/gallery2.jpg"
              />
            </div>
          </div>
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-3"
                src="/img/gallery3.jpg"
              />
            </div>
          </div>
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-4"
                src="/img/gallery2.jpg"
              />
            </div>
          </div>
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-5"
                src="/img/gallery1.jpg"
              />
            </div>
          </div>
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-6"
                src="/img/gallery3.jpg"
              />
            </div>
          </div>

          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-7"
                src="/img/gallery3.jpg"
              />
            </div>
          </div>
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-8"
                src="/img/gallery2.jpg"
              />
            </div>
          </div>
          <div className="item gallery-item col-lg-4 col-md-6 col-sm-12">
            <div className="card gallery-card">
              <img
                className="img-fluid gallery-image gallery-image-9"
                src="/img/gallery1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
