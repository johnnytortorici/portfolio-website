import React from "react";
import styled from "styled-components";
import Project from "./Project";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Home = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;

  @media (max-width: 650px) {
    padding: 20px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  @media (max-width: 650px) {
    padding: 20px 0;
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

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Home;
