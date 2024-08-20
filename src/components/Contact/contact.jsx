import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mo4.PNG";
import Tilt from "react-parallax-tilt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import React from "react";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5726bc65-f7bf-44b0-b834-101d0e76240b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      console.log("Success", res);
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
    }
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
                <form className="form" onSubmit={onSubmit}>
                  <p className="title">Contact Me</p>
                  <div className="flex">
                    <label>
                      <input
                        required
                        placeholder=""
                        type="name"
                        className="input"
                        name="name"
                      />
                      <span>User Name</span>
                    </label>

                    <label>
                      <input
                        required
                        placeholder=""
                        type="email"
                        className="input"
                        name="email"
                      />
                      <span>Email</span>
                    </label>
                  </div>
                  <label>
                    <textarea
                      style={{ width: "300px" ,  height: "250px" }}
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
              Feel free to <span className="purple">connect </span>with me
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
    </>
  );
}
export default ContactUs;
