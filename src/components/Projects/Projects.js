import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import solar from "../../Assets/Projects/solar.png";
import lungcancer from "../../Assets/Projects/lung_Cancer_prediction.png";

import Innerwell from "../../Assets/Projects/iPhone 13 mockup.png";
import startupcompany from "../../Assets/Projects/startupcompany.JPG";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={Innerwell}
              isBlog={false}
              title="Innerwell"
              description="Architected a comprehensive mental health platform integrating 9 core features: chat support, medication information,
 assessments, therapist bookings, helplines, journaling, art therapy, support groups, and educational resources, Implemented a machine learning-based scoring system to predict depression levels with 92% accuracy."
              ghLink="https://github.com/sahajdeepsingh651/Innerwell"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              isGit={false}
              title="Xfinitive(Freelancing Project)"
              description="Developed Xfinitive, a cross-platform healthcare app using Flutter, achieving 90% code reuse between iOS and Android
 versions."
              
              demoLink="https://vimeo.com/996735229?share=copy"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Predicting solar energy using machine learning"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/sahajdeepsingh651/Predicting-solar-energy-using-machine-learning"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startupcompany}
              isBlog={false}
              title="TheStartupCompany"
              description="Guided early-stage founders to validate ideas, develop compelling business plans, and acquire initial 100 customers, Engineered responsive user interfaces using Next.js."
              ghLink="https://github.com/sahajdeepsingh651/the_startup_company"
              demoLink="https://www.thestartupcompany.in/giy"              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lungcancer}
              isBlog={false}
              title="Lung Cancer Prediction using CNN and Transfer Learning"
              description="Engineered an image classification system categorizing lung cancer types: Normal, Adenocarcinoma, Large Cell Carcinoma, and Squamous Cell Carcinoma. Implemented Convolutional Neural Networks (CNN) with the Xception model, achieving a 93% accuracy rate in image classification."
              ghLink="https://github.com/sahajdeepsingh651/Lung_Cancer_Prediction?tab=readme-ov-file"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
