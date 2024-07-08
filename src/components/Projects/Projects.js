import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import utube from "../../Assets/Projects/UTUBE.png";
import judiciary from "../../Assets/Projects/indian-judiciary-system-original.png";
import zomato from "../../Assets/Projects/Zomato-Logo.png";
import snake from "../../Assets/Projects/Snake_OG-logo.png";
import FDSM from "../../Assets/Projects/FDSM.png";
import weather from "../../Assets/Projects/weather1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utube}
              isBlog={false}
              title="Modern Youtube Clone"
              description="I developed a fully functional YouTube clone using React.js, demonstrating my proficiency in front-end web development. This project integrates real-time YouTube video links using Rapid API, ensuring dynamic and up-to-date content. The interface is designed to be intuitive and user-friendly, providing a seamless and engaging user experience."
              ghLink="https://github.com/ANIL-KUMAR-YEDLA/Modern-YouTube-Clone"
              demoLink="https://anil-kumar-yedla.github.io/Modern-YouTube-Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={judiciary}
              isBlog={false}
              title="Judiciary Information System Software"
              description="I developed a comprehensive software solution for court officials, empowering them to efficiently manage, securely store, and effortlessly schedule cases, resulting in streamlined court proceedings, improved efficiency, and meticulous record-keeping. Designed for registrars, lawyers, and judges, the software enables seamless case management and easy access to case data."
              ghLink="https://github.com/ANIL-KUMAR-YEDLA/Judiciary-information-system"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zomato}
              isBlog={false}
              title="Zomato-Clone"
              description="I developed a responsive and visually appealing user interface for a Zomato clone using React.js, ensuring a seamless experience across various devices and screen sizes. I applied design principles to create a user-friendly interface and utilized React features like hooks to handle state changes and efficiently display information such as restaurant details, ratings, and reviews."
              ghLink="https://github.com/ANIL-KUMAR-YEDLA/zomato-clone"
              demoLink="https://anil-kumar-yedla.github.io/zomato-clone/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="I developed a snake game website using HTML, CSS, and JavaScript, delivering an interactive and engaging gaming experience. I incorporated game mechanics such as snake movement, food generation, and collision detection, ensuring an authentic rendition of the classic Snake game within a captivating web-based setting."
              ghLink="https://github.com/ANIL-KUMAR-YEDLA/Snake-game"
              demoLink="https://anil-kumar-yedla.github.io/Snake-game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FDSM}
              isBlog={false}
              title="Food Delivery Management"
              description="I developed a food delivery management system using HTML, CSS, and Python. This project aimed to streamline the process of managing food delivery orders, providing an efficient and user-friendly platform for both customers and administrators. The frontend, designed with HTML and CSS, offers a clean and intuitive interface for users to place orders and track delivery status."
              ghLink="https://github.com/ANIL-KUMAR-YEDLA/Food-Delivery-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="I developed a weather application using HTML, CSS, and JavaScript, designed to provide users with real-time weather updates. The application features a clean and intuitive user interface, allowing users to easily search for weather information by city."
              ghLink="https://github.com/ANIL-KUMAR-YEDLA/Weather-app"
              demoLink="https://anil-kumar-yedla.github.io/Weather-app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
