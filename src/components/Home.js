import React from "react";
import styled from "styled-components";
import Project from "./Project";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Home = () => {
  return (
    <Wrapper>
      <Gradient>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L60,69.3C120,107,240,181,360,192C480,203,600,149,720,112C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Gradient>
      <Heading>
        <Title>
          <h1>Johnny Tortorici</h1>
          <h2>Web developer, number cruncher, creator.</h2>
        </Title>
        <Skills>React | Node.js | Express | MongoDB</Skills>
        <Social>
          <a
            href="https://www.linkedin.com/in/johnnygt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/johnnytortorici"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </Social>
      </Heading>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 1440 320">
        <path
          fill="rgba(107,51,230, 0.2)"
          fillOpacity="1"
          d="M0,32L60,69.3C120,107,240,181,360,192C480,203,600,149,720,112C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <ProjectsSection>
        <h3>Recent projects</h3>
        <Projects>
          <Project
            name="Wealthvitals"
            role="Founder - Full stack project"
            description="Financial planning application that aims to empower users to take
        better control of their finances."
            src="/images/wealthvitals.jpg"
            alt="Wealthvitals"
            href="https://github.com/johnnytortorici/wealthvitals"
          />
          <Project
            name="The Shoppies"
            role="Front-end, React project"
            description="Movie nomination demo built with React. Links to the OMDb API."
            src="/images/shoppies-responsive.jpg"
            alt="The Shoppies"
            href="https://shoppies-react.netlify.app/"
          />
        </Projects>
      </ProjectsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Gradient = styled.div`
  background: linear-gradient(
    90deg,
    rgba(33, 210, 254, 1) 0%,
    rgba(107, 51, 230, 1) 100%
  );
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0 40px;

  @media (max-width: 650px) {
    padding: 0 20px;
  }
`;

const Title = styled.div`
  text-align: center;
  padding-bottom: 60px;
`;

const Skills = styled.p`
  padding-bottom: 20px;
  text-align: center;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  font-size: 3em;
`;

const ProjectsSection = styled.section`
  background-color: rgba(107, 51, 230, 0.2);
  padding: 40px;

  @media (max-width: 650px) {
    padding: 20px;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Home;
