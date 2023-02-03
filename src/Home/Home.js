import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      {/*  <!-- Preloader --> */}
      <div id="preloader"></div>
     
      {/*  <!-- Sidebar Section --> */}
      <a href="#" className="js-bauen-nav-toggle bauen-nav-toggle">
        <i></i>
      </a>
      <aside id="bauen-aside">
        {/*   <!-- Logo --> */}
        <div className="bauen-logo">
          <NavLink to="/swastika">
            <img
              src={process.env.PUBLIC_URL + `/assets/img/logo.png`}
              className="logo-img"
              alt="not found"
            />
          </NavLink>
        </div>
        

        {/*    <!-- Menu --> */}
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
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/*     <!-- Sidebar Footer --> */}
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
      {/*   <!-- Main --> */}
      <div id="bauen-main">
        {/* <!-- Slider --> */}
        <header id="home" className="header slider-fade">
          <div className="owl-carousel owl-theme">
            {/*  <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. --> */}

            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + `/assets/img/slider/1.jpg`
                })`,
              }}
              className="text-right item bg-img"
              data-overlay-dark="3"
              data-background={
                process.env.PUBLIC_URL + `/assets/img/slider/1.jpg`
              }
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 offset-md-5">
                      <div className="o-hidden">
                        <h1>Innovative Design</h1>

                        <div className="butn-light mt-30 mb-30">
                          <a href="#contact">
                            <span>Contact us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + `/assets/img/slider/2.jpg`
                })`,
              }}
              className="text-right item bg-img"
              data-overlay-dark="4"
              data-background={
                process.env.PUBLIC_URL + `/assets/img/slider/2.jpg`
              }
            >
              <div className="v-middle caption">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 offset-md-5">
                      <div className="o-hidden">
                        <h1>Innovative Design</h1>

                        <div className="butn-light mt-30 mb-30">
                          <a href="#contact">
                            <span>Contact us </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*   <!-- Corner --> */}
          <div className="hero-corner"></div>
          <div className="hero-corner3"></div>
          <div >
        <a href="https://www.instagram.com/swastika.designers/?igshid=MDM4ZDc5MmU%3D">
          <img
            src={process.env.PUBLIC_URL + `/assets/img/whatsapp.jpg`}
            className="whatsapp"
            alt="whatspp"
          />
        </a>
      </div>
        </header>
        {/*     <!-- Content --> */}
        <div className="content-wrapper">
          {/*   <!-- Lines --> */}
          <section className="content-lines-wrapper">
            <div className="content-lines-inner">
              <div className="content-lines"></div>
            </div>
          </section>
          {/*   <!-- About --> */}

          <section id="about" className="about section-padding">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 mb-30 animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <h2 className="section-title">
                    About <span>Swastika Designers</span>
                  </h2>
                  <p>
                    Swastika Designers believes beautiful building results from
                    the collective determination of client, architect and
                    builder. The happiness of our clients is our singular goal.
                    We believe that every project has a mission and we
                    collaborate with our clients throughout the design process —
                    from early visioning through project completion — to develop
                    and implement a shared vision to achieve that mission.
                  </p>
                  <p>
                    We are committed to provide the highest level of client
                    services, maintaining clear and consistent communication,
                    proactively anticipating client needs, and endeavouring to
                    make the process of working with us as smooth and efficient
                    as possible. Our studio practice focuses on bringing
                    innovative design by also being remain committed to our
                    cultural values with economic and social integrity. We also
                    keep emerging the trends in the architecture and design
                    spaces.
                  </p>
                  <p align="justified">
                    Its works include Industrial, Commercial, Residential,
                    Hospitality as well as Educational, Healthcare, Retail and
                    Interior projects. As specialists in Sustainability,
                    Landscape designing, and Urban designing, we create
                    buildings and spaces that focuses on the satisfaction of the
                    clients by providing comfortable spaces as well as the
                    successful and efficient delivery of completed projects. We
                    value the relationships he builds with his clients and the
                    influence his work will have on their daily lives.
                  </p>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <div className="about-img">
                    <div className="img">
                      <img
                        src={process.env.PUBLIC_URL + `/assets/img/about.jpg`}
                        className="img-fluid"
                        alt="not found"
                      />
                    </div>

                    <div
                      className="about-img-2 about-buro"
                      style={{ width: "200px" }}
                    >
                      Restaurant in Delhi Ncr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*       <!-- Projects --> */}
          <section id="projects" className="projects section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="section-title">
                    Our <span>Projects</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="position-re o-hidden">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/img/projects/1.jpg`
                          }
                          alt="not found"
                        />
                      </div>
                      <div className="con">
                        <h6>
                          <a href="#">Interior</a>
                        </h6>

                        <div className="line"></div>
                        <NavLink to="/CottonHouse">
                          <i className="ti-arrow-right"></i>
                        </NavLink>
                      </div>
                    </div>
                    <div className="item">
                      <div className="position-re o-hidden">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/img/projects/2.jpg`
                          }
                          alt="not found"
                        />
                      </div>
                      <div className="con">
                        <h6>
                          <NavLink to="/ArmadaCenter">Exterior</NavLink>
                        </h6>
                        <h5>
                          <NavLink to="/ArmadaCenter">Armada Center</NavLink>
                        </h5>
                        <div className="line"></div>
                        <NavLink to="/ArmadaCenter">
                          <i className="ti-arrow-right"></i>
                        </NavLink>
                      </div>
                    </div>
                    <div className="item">
                      <div className="position-re o-hidden">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/img/projects/3.jpg`
                          }
                          alt="not found"
                        />
                      </div>
                      <div className="con">
                        <h6>
                          <NavLink to="/StonyaVilla">Urban</NavLink>
                        </h6>
                        <h5>
                          <NavLink to="/StonyaVilla">Stonya Villa</NavLink>
                        </h5>
                        <div className="line"></div>
                        <NavLink to="/StonyaVilla">
                          <i className="ti-arrow-right"></i>
                        </NavLink>
                      </div>
                    </div>
                    <div className="item">
                      <div className="position-re o-hidden">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/img/projects/4.jpg`
                          }
                          alt="not found"
                        />
                      </div>
                      <div className="con">
                        <h6>
                          <NavLink to="/PrimeHotel">Interior</NavLink>
                        </h6>
                        <h5>
                          <NavLink to="/PrimeHotel">Prime Hotel</NavLink>
                        </h5>
                        <div className="line"></div>
                        <NavLink to="/PrimeHotel">
                          <i className="ti-arrow-right"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*   <!-- Services --> */}
          <section id="services" className="services section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="section-title">
                    Our <span>Services</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="item">
                    <NavLink to="/Architecture">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/img/icons/icon-1.png`
                        }
                        alt="not found"
                      />
                      <h5>Architecture</h5>
                      <div className="line"></div>
                      <p>
                        Architecture bibendum eros eget lacus the vulputate sit
                        amet vehicuta nibhen ulicera in the vitae miss.
                      </p>
                      <div className="numb">01</div>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <NavLink to="/InteriorDesign">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/img/icons/icon-2.png`
                        }
                        alt="not found"
                      />
                      <h5>Interior Design</h5>
                      <div className="line"></div>
                      <p>
                        Architecture bibendum eros eget lacus the vulputate sit
                        amet vehicuta nibhen ulicera in the vitae miss.
                      </p>
                      <div className="numb">02</div>
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item">
                    <NavLink to="/UrbanDesign">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/img/icons/icon-3.png`
                        }
                        alt="not found"
                      />
                      <h5>Urban Design</h5>
                      <div className="line"></div>
                      <p>
                        Architecture bibendum eros eget lacus the vulputate sit
                        amet vehicuta nibhen ulicera in the vitae miss.
                      </p>
                      <div className="numb">03</div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*     <!-- Blog --> */}
          <section id="blog" className="bauen-blog section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="section-title">
                    Current <span>News</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="owl-carousel owl-theme">
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
                          <NavLink to="/Blog">Architecture </NavLink> -
                          20.12.2022
                        </span>
                        <h5>
                          <NavLink to="/Post">
                            Modern Architectural Structures
                          </NavLink>
                        </h5>
                      </div>
                    </div>
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
                        <span className="category">
                          <NavLink to="/Blog">Interior</NavLink> - 18.12.2022
                        </span>
                        <h5>
                          <NavLink to="/Post">
                            Modernism in Architecture
                          </NavLink>
                        </h5>
                      </div>
                    </div>
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
                        <span className="category">
                          <NavLink to="/Blog">Urban</NavLink> - 16.12.2022
                        </span>
                        <h5>
                          <NavLink to="/Post">Postmodern Architecture</NavLink>
                        </h5>
                      </div>
                    </div>
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
                        <span className="category">
                          <NavLink to="/Blog">Planing</NavLink> - 14.12.2022
                        </span>
                        <h5>
                          <NavLink to="/Post">
                            Modern Architecture Buildings
                          </NavLink>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*   <!-- Contact --> */}
          <section
            id="contact"
            className="section-padding"
            data-scroll-index="5"
          >
            <div className="container">
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <h2 className="section-title">
                    Contact <span>Us</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-4 mb-30 animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <p>
                    <b>Phone :</b> +91 7060858637
                  </p>
                  <p>
                    <b>Email :</b> info@swastikadesigners.in
                  </p>
                </div>
                <div
                  className="col-md-4 mb-30 animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <p>
                    <b>Address :</b> 618, Shiv Mandir Ln, Jawahar Quarters,
                    BEGUM BAGH, Meerut, Uttar Pradesh, 250001
                    <br />
                    Circular road, opp. Ch. Chottu Ram Inter College,
                    Muzaffarnagar, 251001
                  </p>
                </div>
                <div
                  className="col-md-4 animate-box"
                  data-animate-effect="fadeInUp"
                >
                  <form method="post" className="row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        id="message"
                        cols="40"
                        rows="3"
                        placeholder="Your Message"
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
          </section>
          {/*  <!-- Promo video - Testiominals --> */}
          <section className="testimonials">
            <div
              className="background bg-img bg-fixed section-padding pb-0"
              data-background="img/banner2.jpg"
              data-overlay-dark="3"
            >
              <div className="container">
                <div className="row">
                  {/* <!-- Promo video --> */}
                  <div className="col-md-6">
                    <div className="vid-area">
                      <div className="vid-icon">
                        <a
                          className="play-button vid"
                          href="https://youtu.be/RziCmLzpFNY"
                        >
                          <svg className="circle-fill">
                            <circle
                              cx="43"
                              cy="43"
                              r="39"
                              stroke="#fff"
                              strokeWidth=".5"
                            ></circle>
                          </svg>
                          <svg className="circle-track">
                            <circle
                              cx="43"
                              cy="43"
                              r="39"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                            ></circle>
                          </svg>
                          <span className="polygon">
                            <i className="ti-control-play"></i>
                          </span>
                        </a>
                      </div>
                      <div className="cont mt-15 mb-30">
                        <h5>View promo video</h5>
                      </div>
                    </div>
                  </div>
                  {/*   <!-- Testiominals --> */}
                  <div className="col-md-5 offset-md-1">
                    <div
                      className="testimonials-box animate-box"
                      data-animate-effect="fadeInUp"
                    >
                      <div className="head-box">
                        <h4>What Client's Say?</h4>
                      </div>
                      <div className="owl-carousel owl-theme">
                        <div className="item">
                          <span className="quote">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/assets/img/quot.png`
                              }
                              alt="not found"
                            />
                          </span>
                          <p>
                            Architect dapibus augue metus the nec feugiat erat
                            hendrerit nec. Duis ve ante the lemon sanleo nec
                            feugiat erat hendrerit necuis ve ante.
                          </p>
                          <div className="info">
                            <div className="author-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `/assets/img/team/1.jpg`
                                }
                                alt="not found"
                              />
                            </div>
                            <div className="cont">
                              <h6>Jason Brown</h6>
                              <span>Crowne Plaza Owner</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <span className="quote">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/assets/img/quot.png`
                              }
                              alt="not found"
                            />
                          </span>
                          <p>
                            Interior dapibus augue metus the nec feugiat erat
                            hendrerit nec. Duis ve ante the lemon sanleo nec
                            feugiat erat hendrerit necuis ve ante.
                          </p>
                          <div className="info">
                            <div className="author-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `/assets/img/team/2.jpg`
                                }
                                alt="not found"
                              />
                            </div>
                            <div className="cont">
                              <h6>Emily White</h6>
                              <span>Armada Owner</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <span className="quote">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/assets/img/quot.png`
                              }
                              alt="not found"
                            />
                          </span>
                          <p>
                            Urban dapibus augue metus the nec feugiat erat
                            hendrerit nec. Duis ve ante the lemon sanleo nec
                            feugiat erat hendrerit necuis ve ante.
                          </p>
                          <div className="info">
                            <div className="author-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `/assets/img/team/4.jpg`
                                }
                                alt="not found"
                              />
                            </div>
                            <div className="cont">
                              <h6>Jesica Smith</h6>
                              <span>Alsa Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*      <!-- Clients --> */}
          <section className="clients">
            <div className="container">
              <div className="row">
                <div className="col-md-7 owl-carousel owl-theme">
                  <div className="clients-logo">
                    <a href="#0">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/clients/1.png`
                        }
                        alt="not found"
                      />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/clients/2.png`
                        }
                        alt="not found"
                      />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/clients/3.png`
                        }
                        alt="not found"
                      />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/clients/4.png`
                        }
                        alt="not found"
                      />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/clients/5.png`
                        }
                        alt="not found"
                      />
                    </a>
                  </div>
                  <div className="clients-logo">
                    <a href="#0">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/assets/img/clients/6.png`
                        }
                        alt="not found"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*     <!-- Footer --> */}
          <footer className="main-footer dark">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-30">
                  <div className="item fotcont">
                    <div className="fothead">
                      <h6>Phone</h6>
                    </div>
                    <p>+91 7060858637</p>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="item fotcont">
                    <div className="fothead">
                      <h6>Email</h6>
                    </div>
                    <p>info@swastikadesigners.in</p>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="item fotcont">
                    <div className="fothead">
                      <h6>Our Address</h6>
                    </div>
                    <p>
                      618, Shiv Mandir Ln, Jawahar Quarters, BEGUM BAGH, Meerut,
                      Uttar Pradesh, 250001
                      <br />
                      <br />
                      Circular road, opp. Ch. Chottu Ram Inter College,
                      muzaffarnagar, 251001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="text-left">
                      <p>© 2022 Swastika Designers. All right reserved.</p>
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

export default Home;
