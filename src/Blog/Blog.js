import React from "react";
import { NavLink } from "react-router-dom";
function Blog() {
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
              classNameName="logo-img"
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
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li className="active">
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
          {/* <!-- Header Banner --> */}
          <section
            className="banner-header banner-img valign bg-img bg-fixed"
            data-overlay-darkgray="5"
            data-background="img/banner.jpg"
          ></section>
          {/* <!-- Blog  --> */}
          <section className="bauen-blog section-padding2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="section-title">
                    Our <span>Blog</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/slider/1.jpg`
                        }
                        alt="not found"
                      />
                    </div>
                    <div className="con">
                      <span className="category">
                        <NavLink to="/Blog">Architecture </NavLink> - 20.12.2022
                      </span>
                      <h5>
                        <NavLink to="/Post">
                          Modern Architectural Structures
                        </NavLink>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/slider/2.jpg`
                        }
                        alt="not found"
                      />
                    </div>
                    <div className="con">
                      {" "}
                      <span className="category">
                        <NavLink to="/Blog">Interior</NavLink> - 18.12.2022
                      </span>
                      <h5>
                        <NavLink to="/Post2">Modernism in Architecture</NavLink>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/slider/3.jpg`
                        }
                        alt="not found"
                      />
                    </div>
                    <div className="con">
                      {" "}
                      <span className="category">
                        <NavLink to="/Blog">Urban</NavLink> - 16.12.2022
                      </span>
                      <h5>
                        <NavLink to="/Post3">Postmodern Architecture</NavLink>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div className="position-re o-hidden">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/slider/4.jpg`
                        }
                        alt="not found"
                      />
                    </div>
                    <div className="con">
                      {" "}
                      <span className="category">
                        <NavLink to="/Blog">Planing</NavLink> - 14.12.2022
                      </span>
                      <h5>
                        <NavLink to="/Post4">
                          Modern Architecture Buildings
                        </NavLink>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* <!-- Pagination --> */}
                  <ul className="bauen-pagination-wrap align-center mb-30 mt-30">
                    <li>
                      <NavLink to="Blog">
                        <i className="ti-angle-left"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="Blog">1</NavLink>
                    </li>
                    <li>
                      <NavLink to="Blog" className="active">
                        2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="Blog">3</NavLink>
                    </li>
                    <li>
                      <NavLink to="Blog">
                        <i className="ti-angle-right"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Footer --> */}
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

export default Blog;
