import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 300px;
  min-width: 200px;
  margin: 15px;
`;

const Exercise = styled.div`
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px rgba(204,204,204,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 10px rgba(204,204,204,0.33);
  }
`;

const Title = styled.div`
  text-align: start;
  display: block;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 1px solid #eaeaea;
  padding: 20px;  
`;

const Number = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  padding: 20px;
`;
const Home: React.FC<any> = ({ history }) => {
    return (
    <Container>
    
        <Title>01-fundementals</Title>
        <Section>
        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/1")}>
                <Number>1</Number>
                <div>hello-world-component</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/2")}>
                <Number>2</Number>
                <div>using-typescript</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/3")}>
                <Number>3</Number>
                <div>car-info-component</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/4")}>
                <Number>4</Number>
                <div>click-alert</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/5")}>
                <Number>5</Number>
                <div>click-counter</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/6")}>
                <Number>6</Number>
                <div>favorite-color</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/7")}>
                <Number>7</Number>
                <div>clock-component</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/8")}>
                <Number>8</Number>
                <div>framework-statistics</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/9")}>
                <Number>9</Number>
                <div>service-status</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/10")}>
                <Number>10</Number>
                <div>user-form</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/11")}>
                <Number>11</Number>
                <div>conversion-m-ft</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/12")}>
                <Number>12</Number>
                <div>theme-provider</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/01-fundementals/exercise/13")}>
                <Number>13</Number>
                <div>counter-error-boundary</div>
                </Exercise>
            </Wrapper>

        
        </Section>
    
        <Title>02-styled-components</Title>
        <Section>
        
            <Wrapper>
                <Exercise onClick={() => history.push("/02-styled-components/exercise/14")}>
                <Number>14</Number>
                <div>styled-button</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/02-styled-components/exercise/15")}>
                <Number>15</Number>
                <div>styled-button-props</div>
                </Exercise>
            </Wrapper>

        
        </Section>
    
        <Title>03-react-router</Title>
        <Section>
        
            <Wrapper>
                <Exercise onClick={() => history.push("/03-react-router/exercise/16")}>
                <Number>16</Number>
                <div>routes</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/03-react-router/exercise/17")}>
                <Number>17</Number>
                <div>routes-active-style</div>
                </Exercise>
            </Wrapper>

        
            <Wrapper>
                <Exercise onClick={() => history.push("/03-react-router/exercise/18")}>
                <Number>18</Number>
                <div>route-params</div>
                </Exercise>
            </Wrapper>

        
        </Section>
    
    </Container>
    )
    };

export default Home;
