import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({color}: {color: string}) => color};
  height: 100%;
`;


const Color: React.FC<{color: string}> = ({ color }) => {
  return (
    <Wrapper color={color}>
      <h1>{color} page</h1>
    </Wrapper>
  )
}

export default Color
