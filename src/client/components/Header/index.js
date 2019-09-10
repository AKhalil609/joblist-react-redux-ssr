import React from "react";
import styled from "styled-components";

// Header functional component

export default function index() {
  const Header = styled.div`
    background-color: #77aded;
    height: 18vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    .title {
      font-size: 1.6em;
      margin-left: 2%;
    }
  `;

  const Paragraph = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 0.8em;
    }
  `;

  return (
    <Header>
      <div>
        <div className="title">Welcome to JobsForYou</div>
        <Paragraph>
          <p>
            This is a simple ssr React application that displays a list of jobs
            and their discription.
          </p>
          <p>
            Please Click on any job title in the list to view the description
          </p>
        </Paragraph>
      </div>
    </Header>
  );
}
