import React from "react";
import { NavLink } from "react-router-dom";
function Post2() {
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
              classNameNameName="logo-img"
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
          {/* <!-- Post --> */}
          <section className="pb-90">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/img/slider/2.jpg`}
                    className="mb-30"
                    alt="not found"
                  />
                  <h2 className="section-title2">Modernism in Architecture</h2>
                  <p>
                    Quisque pretium fermentum quam, sit amet cursus ante
                    sollicitudin vel. Morbi consequat risus consequat, porttitor
                    orci sit amet, iaculis nisl. Integer quis sapien nec elit
                    ultrices euismod sit amet id lacus. Sed a imperdiet erat.
                    Duis eu est dignissim lacus dictum hendrerit quis vitae mi.
                    Fusce eu nulla ac nisi cursus tincidunt. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Integer
                    tristique sem eget leo faucibus porttitor. Suspendisse
                    sagittis, magna sed varius iaculis tellus tortor non neque.
                  </p>
                  <p>
                    Nulla vitae metus tincidunt, varius nunc quis, porta nulla.
                    Pellentesque vel dui nec libero auctor pretium id sed arcu.
                    Nunc consequat diam id nisl blandit dignissim. Etiam commodo
                    diam dolor, at scelerisque sem finibus sit amet. Curabitur
                    id lectus eget purus finibus laoreet. Nam eget lectus ac sem
                    luctus hendrerit sed nec magna. Maecenas vulputate magna sed
                    nunc pellentesque, in consectetur nisi condimentum.
                  </p>
                </div>
              </div>
              <div className="bauen-comment-section">
                <div className="row">
                  {/* <!-- Comment --> */}
                  <div className="col-md-7">
                    <div className="bauen-post-comment-wrap">
                      <div className="bauen-user-comment">
                        <img
                          src={
                            process.env.PUBLIC_URL + `/assets/img/team/2.jpg`
                          }
                          alt="not found"
                        />
                      </div>
                      <div className="bauen-user-content">
                        <h3>
                          Jesica Misse<span> 29 October 2022</span>
                        </h3>
                        <p>
                          Photography ultricies nibh non dolor maximus sceleue
                          inte molliser faubs neque nec tincidunte aliquam erat
                          volutpat. Praeser tempor malade yap.{" "}
                        </p>{" "}
                        <a className="bauen-repay" href="#">
                          Reply<i className="ti-back-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Contact Form --> */}
                  <div className="col-md-4 offset-md-1">
                    <h3>Leave a Reply</h3>
                    <form method="post" className="row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name *"
                          required=""
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address *"
                          required=""
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="message"
                          id="message"
                          cols="40"
                          rows="4"
                          placeholder="Your Comment *"
                          required=""
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button className="butn-dark mt-15">
                          <a href="#0">
                            <span>Send</span>
                          </a>
                        </button>
                      </div>
                    </form>
                  </div>
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

export default Post2;
