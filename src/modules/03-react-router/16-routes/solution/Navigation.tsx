import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 25px;
  font-weight: bold;
  padding: 5px;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #eaeaea;
`;


const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <NavigationLink to="/blue">Blue</NavigationLink>
      <NavigationLink to="/red">Red</NavigationLink>
      <NavigationLink to="/yellow">Yellow</NavigationLink>
      <NavigationLink to="/green">Green</NavigationLink>
    </Wrapper>
  )
}

export default Navigation;
