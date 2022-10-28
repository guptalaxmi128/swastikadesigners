import React from "react";
import { NavLink } from "react-router-dom";
function StonyaVilla() {
  return (
    <div>
      {/* <!-- Preloader --> */}
      <div id="preloader"></div>

      {/* <!-- Sidebar Section --> */}
      <a href="#" className="js-bauen-nav-toggle bauen-nav-toggle">
        <i></i>
      </a>
      <aside id="bauen-aside">
        {/* <!-- Logo --> */}
        <div className="bauen-logo">
          <NavLink to="/swastika">
            {" "}
            <img
              src={process.env.PUBLIC_URL + `/assets/img/logo.png`}
              className="logo-img"
              alt="not found"
            />
            <h2>
              BAUEN<span>INNOVATE DESIGN</span>
            </h2>
          </NavLink>
        </div>
        {/* <!-- Menu --> */}
        <nav className="bauen-main-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li className="active">
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/* <!-- Sidebar Footer --> */}
        <div className="bauen-footer">
          <ul>
            <li>
              <a href="#">
                <i className="ti-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* <!-- Main --> */}
      <div id="bauen-main">
        {/* <!-- Content --> */}
        <div className="content-wrapper">
          {/* <!-- Lines --> */}
          <section className="content-lines-wrapper">
            <div className="content-lines-inner">
              <div className="content-lines"></div>
            </div>
          </section>
          {/*  <!-- Header Banner --> */}
          <section
            className="banner-header banner-img valign bg-img bg-fixed"
            data-overlay-darkgray="5"
            data-background="img/banner.jpg"
          ></section>
          {/* <!-- Projects Page --> */}
          <section className="section-padding2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="section-title2">Stonya Villa</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p>
                    Architecture non lorem ac erat suscipit bibendum. Nulla
                    facilisi. Sedeuter nunc volutpat, mollis sapien vel,
                    conseyer turpeutionyer masin libero sempe. Fusceler mollis
                    augue sit amet hendrerit vestibulum. Duisteyerionyer
                    venenatis lacus.
                  </p>
                  <p>
                    Villa gravida eros ut turpis interdum ornare. Interdum et
                    malesu they adamale fames ac anteipsu pimsine faucibus.
                    Curabitur arcu site feugiat in tortor in, volutpat
                    sollicitudin libero.
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <b>Year : </b> 2022
                  </p>
                  <p>
                    <b>Company : </b> OTT International
                  </p>
                  <p>
                    <b>Project Name : </b> Stonya Villa
                  </p>
                  <p>
                    <b>Location : </b> Ottova, Canada
                  </p>
                </div>
              </div>
              <div className="row mt-30">
                <div className="col-md-6 gallery-item">
                  <a
                    href={process.env.PUBLIC_URL + `/assets/img/slider/1.jpg`}
                    title="Architecture"
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src={
                            process.env.PUBLIC_URL + `/assets/img/slider/1.jpg`
                          }
                          className="img-fluid mx-auto d-block"
                          alt="work-img"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 gallery-item">
                  <a
                    href={process.env.PUBLIC_URL + `/assets/img/slider/2.jpg`}
                    title="Architecture"
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src={
                            process.env.PUBLIC_URL + `/assets/img/slider/2.jpg`
                          }
                          className="img-fluid mx-auto d-block"
                          alt="work-img"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 gallery-item">
                  <a
                    href={process.env.PUBLIC_URL + `/assets/img/slider/3.jpg`}
                    title="Architecture"
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src={
                            process.env.PUBLIC_URL + `/assets/img/slider/3.jpg`
                          }
                          className="img-fluid mx-auto d-block"
                          alt="work-img"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 gallery-item">
                  <a
                    href={process.env.PUBLIC_URL + `/assets/img/slider/4.jpg`}
                    title="Architecture"
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src={
                            process.env.PUBLIC_URL + `/assets/img/slider/4.jpg`
                          }
                          className="img-fluid mx-auto d-block"
                          alt="work-img"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Prev-Next Projects --> */}
          <section className="projects-prev-next">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="projects-prev-next-left">
                      <NavLink to="ArmadaCenter">
                        {" "}
                        <i className="ti-arrow-left"></i> Previous Project
                      </NavLink>
                    </div>
                    <a href="#projects">
                      <i className="ti-layout-grid3-alt"></i>
                    </a>
                    <div className="projects-prev-next-right">
                      <NavLink to="PrimeHotel">
                        Next Project <i className="ti-arrow-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  <!-- Footer --> */}
          <footer className="main-footer dark">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-30">
                  <div className="item fotcont">
                    <div className="fothead">
                      <h6>Phone</h6>
                    </div>
                    <p>+1 203-123-0606</p>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="item fotcont">
                    <div className="fothead">
                      <h6>Email</h6>
                    </div>
                    <p>architecture@bauen.com</p>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="item fotcont">
                    <div className="fothead">
                      <h6>Our Address</h6>
                    </div>
                    <p>24 King St, Charleston, SC 29401 USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="text-left">
                      <p>© 2022 Bauen. All right reserved.</p>
                    </div>
                  </div>
                  <div className="col-md-4 abot">
                    <div className="social-icon">
                      <NavLink to="/swastika">
                        <i className="ti-facebook"></i>
                      </NavLink>
                      <NavLink to="/swastika">
                        <i className="ti-twitter"></i>
                      </NavLink>
                      <NavLink to="/swastika">
                        <i className="ti-instagram"></i>
                      </NavLink>
                      <NavLink to="/swastika">
                        <i className="ti-pinterest"></i>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default StonyaVilla;
