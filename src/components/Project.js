import React from "react";
import styled from "styled-components";

const Project = ({ name, role, description, src, alt, href }) => {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
      <Description>
        <h4>{name}</h4>
        <Role>{role}</Role>
        <p>{description}</p>
      </Description>
      <LinkWrapper>
        <a href={href} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </LinkWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: calc(33% - 10px); */
  width: calc(50% - 10px);
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px #d3d3d3;

  &:hover {
    box-shadow: 0 0 10px #d3d3d3;
  }

  @media (max-width: 1000px) {
    width: calc(50% - 10px);
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Description = styled.div`
  padding: 20px;
`;

const Role = styled.p`
  padding: 5px 0 15px;
  font-size: 0.8em;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 30px;
`;

export default Project;
