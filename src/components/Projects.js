import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import airCallProject from "../assets/img/aircall_application.png";
import portfolioProject from "../assets/img/portfolio application.png";
import vueJobSearch from "../assets/img/Vue-Job-Search.png";
import javaWikiMediaProject from "../assets/img/java-wikimedia-project.png";
import jewaEducationLMS from "../assets/img/Jewa-eductaion-LMS.png";
import wordCountAppication from "../assets/img/word-count-application.png";
import demoWebApplication from "../assets/img/demo-web-application.png";
import springBootRestApi from "../assets/img/spring-boot-rest-api.png";
import mind2_0 from "../assets/img/min_2_0_application.png";
import employeeContactApp from "../assets/img/employee_contacts_application.png";
import sandwichApp from "../assets/img/sandwich_application.png";
import drumKitApp from "../assets/img/Drum_kit_js_application.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const front_end_projects = [
    {
      title: "Portfolio Project",
      description:
        "This application contains a selection of my private projects developed using React.",
      imgUrl: portfolioProject,
    },
    {
      title: "Call Application Demo",
      description:
        "This project leverages a third-party API to perform various operations, developed using React.",
      imgUrl: airCallProject,
    },
    {
      title: "Drum Kit Application",
      description:
        "This is a simple drumkit web application built with HTML, CSS, and JavaScript. It allows users to play drum sounds by pressing keys on the keyboard. The app is a fun, interactive demo that showcases basic DOM manipulation and CSS animations.",
      imgUrl: drumKitApp,
    },
    {
      title: "Vue Job Search",
      description:
        "This application is built using Vue 3 to demonstrate CRUD activities with JSON Server as the backend. In order to style the project, I have used Tailwind CSS.",
      imgUrl: vueJobSearch,
    },
    ,
  ];

  const back_end_projects = [
    {
      title: "Java Wikimedia Project",
      description:
        "This application is a Java Spring Boot Microservices based application which handles Wikimedia live streams with Kafka and MySQL.",
      imgUrl: javaWikiMediaProject,
    },
    {
      title: "Jewa Education LMS",
      description:
        "This application is a Learning Management System (LMS) developed for educational institutions using Spring, Hibernate, Servlets, and MySQL.",
      imgUrl: jewaEducationLMS,
    },
    {
      title: "Word Counter with Kafka Streams",
      description:
        "This is a simple application that uses Kafka Streams to count similar words across multiple sentences.",
      imgUrl: wordCountAppication,
    },
    {
      title: "Demo Web Application C#",
      description:
        "This application is a simple Demo application build using .NET framework and MySQL.",
      imgUrl: demoWebApplication,
    },
    {
      title: "Spring Boot Rest Api for Notes",
      description:
        "This application is a Java Spring Boot REST API that utilizes the Java Persistence API (JPA) with a MySQL database",
      imgUrl: springBootRestApi,
    },
  ];

  const mobile_applications = [
    {
      title: "Mind 2.0",
      description:
        "This application is built using React Native to help individuals maintain mental fitness. It offers features such as daily mood tracking, self-evaluation, and personalized treatment recommendations for mental health.",
      imgUrl: mind2_0,
    },
    {
      title: "Employee's Contact Application",
      description:
        "This is a demo project for Swift, created to store employee contact information.",
      imgUrl: employeeContactApp,
    },
    {
      title: "Sandwich Menu Application",
      description:
        "This project is developed using SwiftUI and serves as an ordering application for a sandwich store. It allows users to browse through a variety of sandwich options, customize their orders with different ingredients, and place orders directly through the app. The intuitive user interface ensures a seamless ordering experience, tailored specifically for the store's menu and customer needs.",
      imgUrl: sandwichApp,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
            <h2>Projects</h2>
            <p>
              I am a seasoned Full Stack Developer with extensive experience in
              building and delivering high-quality web, mobile, and backend
              solutions. My expertise spans across a diverse range of
              technologies, including Java SpringBoot / Nodejs, React,Vue,
              Swift, Android, Kotlin, React Native, Firebase, and MongoDB. I
              have a strong command of cloud platforms like AWS and Azure,
              enabling me to design and deploy scalable, secure, and efficient
              applications. With a deep understanding of both frontend and
              backend development, I am skilled in creating intuitive user
              interfaces, robust server-side logic, and seamless integration
              across various platforms. My passion for technology and commitment
              to excellence drive me to continuously learn and adapt, ensuring
              that I provide the best solutions to meet the needs of my clients
              and users.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Frontend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Backend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Mobile</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content
                id="slideInUp"
                className={"animate__animated animate__slideInUp"}
              >
                <Tab.Pane eventKey="first">
                  <Row>
                    {front_end_projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {back_end_projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {mobile_applications.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* </div>}
                </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
