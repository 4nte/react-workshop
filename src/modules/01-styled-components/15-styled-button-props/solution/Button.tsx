import * as React from 'react';
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props: {primary?: boolean}) => props.primary ? '#4a76ea': 'white'};
  border: 2px solid #4a76ea;
  color: ${(props: {primary?: boolean}) => props.primary ? 'white': '#4a76ea'};
  padding: 10px;
  border-radius: 5px;
`;


export default Button;