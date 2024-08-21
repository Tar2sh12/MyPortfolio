import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mo4.PNG";
import Tilt from "react-parallax-tilt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i7k0kgq", "template_1h8vond", form.current, {
        publicKey: "a6G56hRX1GiUAhz3b",
      })
      .then(
        () => {
          toast.success("Message sent successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("something went wrong please try again!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };


  return (
    <>
      <section>
        <Container fluid className="home-about-section" id="about">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-about-description">
                <Col md={5}>
                  <h1 style={{ fontSize: "2.6em" }}>
                    Contact <span className="purple"> Me </span>
                  </h1>
                </Col>
                <form className="form" ref={form} onSubmit={sendEmail}>
                  <p className="title">Contact Me</p>
                  <div className="flex">
                    <label>
                      <input
                        required
                        placeholder=""
                        className="input"
                        type="text" name="user_name"
                      />
                      <span>User Name</span>
                    </label>

                    <label>
                      <input
                        required
                        placeholder=""
                        className="input"
                        type="email" name="user_email"
                      />
                      <span>Email</span>
                    </label>
                  </div>
                  <label>
                    <textarea
                      style={{ width: "300px", height: "250px" }}
                      required
                      placeholder=""
                      type="message"
                      className="input"
                      name="message"
                    />
                    <span>Message</span>
                  </label>

                  <button className="submit" type="submit" value="Send">
                    Submit
                  </button>
                </form>
              </Col>

              <Col md={3} className="myAvtar">
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
                <Row>
                  <Col md={12} className="home-about-social">
                    <h1>FIND ME ON</h1>
                    <p>
                      Feel free to <span className="purple">connect </span>with
                      me
                    </p>
                    <ul className="home-about-social-links">
                      <li className="social-icons">
                        <a
                          href="https://github.com/Tar2sh12"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                        >
                          <AiFillGithub />
                        </a>
                      </li>
                      <li className="social-icons">
                        <a
                          href="https://www.linkedin.com/in/mohamed-tarek-1452b0244/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                        >
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
export default ContactUs;
