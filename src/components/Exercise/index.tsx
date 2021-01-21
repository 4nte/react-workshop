import React from 'react';
import Markdown from "../Markdown/Markdown";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    max-width: 1000px;
`;

const Problem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

interface HOCProps {
    component: React.ComponentType,
    problem: string
}

const Exercise: React.FC<HOCProps> = ({ component: Component, problem }) => {
    return (
        <Wrapper>
            <Problem>
                <Markdown filePath={problem} />
            </Problem>
            <h1>Your solution</h1>
            <Component />
        </Wrapper>
    )
};

export default Exercise;
