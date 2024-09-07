import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import lib from "../../Assets/Projects/library.png";
import Vax from "../../Assets/Projects/vaxScheduler.jpg";
import RES from "../../Assets/Projects/restaurabtRES.jpg";
import Job from "../../Assets/Projects/jobSearchApp.jpeg";
import platform from "../../Assets/Projects/platform.jpg";
function Projects() {
  // return (
  //   <Container fluid className="project-section">
  //     <Particle />
  //     <Container>
  //       <h1 className="project-heading">
  //         My Recent <strong className="purple">Works </strong>
  //       </h1>
  //       <p style={{ color: "white" }}>
  //         Here are a few projects I've worked on recently.
  //       </p>
  //       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  //         <Col md={4} className="project-card">
  //           <ProjectCard
  //             imgPath={Vax}
  //             isBlog={false}
  //             title="VaxScheduler"
  //             description="An online platform designed to streamline and simplify the process of scheduling vaccination appointments."
  //             ghLink="https://github.com/Tar2sh12/final-project-isa"
  //             // demoLink=""
  //           />
  //         </Col>

  //         <Col md={4} className="project-card">
  //           <ProjectCard
  //             imgPath={Job}
  //             isBlog={false}
  //             title="Job Search Application"
  //             description="enhancing job searches with advanced filtering, robust data management, and comprehensive error handling. This project utilizes Node.js, Express.js, MongoDB, Mongoose, and RESTful APIs."
  //             ghLink="https://github.com/Tar2sh12/linkedIn_App"
  //           />
  //         </Col>

  //         <Col md={4} className="project-card">
  //           <ProjectCard
  //             imgPath={lib}
  //             isBlog={false}
  //             title="Library-System"
  //             description="a back-end application for managing a collection of books and authors"
  //             ghLink="https://github.com/Tar2sh12/Library-System-with-EmailVerification-authentication-errorHandling"
  //           />
  //         </Col>

  //         <Col md={4} className="project-card">
  //           <ProjectCard
  //             imgPath={ecommerce}
  //             isBlog={false}
  //             title="E-commerce System"
  //             description="e-commerce system built on the back-end typically involves creating a server-side application that handles the core functionality of an online store. This includes managing products, users, orders, and transactions etc.. ."
  //             ghLink="https://github.com/Tar2sh12/E-Commerce"
  //           />
  //         </Col>

  //         <Col md={4} className="project-card">
  //           <ProjectCard
  //             imgPath={RES}
  //             isBlog={false}
  //             title="Real-time Restaurant Reservation System"
  //             description="A real-time restaurant reservation system will let the users book a table at their favorite restaurant."
  //             ghLink="https://github.com/Tar2sh12/R_ReservationBackEnd-main"

  //           />
  //         </Col>

  //       </Row>
  //     </Container>
  //   </Container>
  // );
  const currentlyWorkingOn = [
    {
      imgPath: Vax,
      title: "VaxScheduler",
      description:
        "An online platform designed to streamline and simplify the process of scheduling vaccination appointments.",
      ghLink: "https://github.com/Tar2sh12/final-project-isa",
    },
    {
      imgPath: Job,
      title: "Job Search Application",
      description:
        "Enhancing job searches with advanced filtering, robust data management, and comprehensive error handling.",
      ghLink: "https://github.com/Tar2sh12/linkedIn_App",
    },
    {
      imgPath: lib,
      title: "Library-System",
      description:
        "A back-end application for managing a collection of books and authors.",
      ghLink:
        "https://github.com/Tar2sh12/Library-System-with-EmailVerification-authentication-errorHandling",
    },
    {
      imgPath: ecommerce,
      title: "E-commerce System",
      description:
        "E-commerce system built on the back-end, managing products, users, orders, and transactions.",
      ghLink: "https://github.com/Tar2sh12/E-Commerce",
    },
    {
      imgPath: RES,
      title: "Real-time Restaurant Reservation System",
      description:
        "A real-time restaurant reservation system allowing users to book a table at their favorite restaurant.",
      ghLink: "https://github.com/Tar2sh12/R_ReservationBackEnd-main",
    },
  ];

  const doneProjects = [
    {
      imgPath: platform,
      title: "Platform-System",
      description: "simple Facebook app using Sequelize and Express",
      ghLink: "https://github.com/Tar2sh12/platform-node-js/tree/main",
      demoLink: "https://platform-node-js.onrender.com/User/getAll",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've been working on recently.
        </p>
        {/* Done Projects Section */}
        <h2 className="project-subheading">Completed Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {doneProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        {/* Currently Working On Section */}
        <h2 className="project-subheading">Currently Working On</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {currentlyWorkingOn.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;