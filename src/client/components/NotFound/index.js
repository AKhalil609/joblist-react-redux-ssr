import React from 'react';
import styled from "styled-components";



export default function index() {
const NotFound = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
    return (
        <NotFound>
            <h1>Sorry we are unable to find what you are looking for</h1>
        </NotFound>
    )
}
