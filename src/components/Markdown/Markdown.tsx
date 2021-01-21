import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Eye from '../Icons/Eye';
import EyeOff from "../Icons/EyeOff";

const Wrapper = styled.div`
  text-align: left;
  background-color: #f4f6f8;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  overflow: auto;
  code {
    background-color: #e6e8ea;
    padding: 2px;
    border-radius: 2px;
    width: 100%
  }
  blockquote {
    border-left: 5px solid #dfe1e3;
    padding-left: 10px;
    margin: 10px 5px;
    color: #2e2e2e;
  }
  h2 {
    border-bottom: 1px solid #cbcbcb;
  }
`;

const Controller = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

interface HOCProps {
    filePath: string;
}

const Markdown: React.FC<HOCProps> = ({ filePath }) => {
    const [text, setText] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        fetch(filePath).then((response) => response.text()).then((text) => {
            setText(text)
        })
    });

    return (
        <Wrapper>
            <Controller onClick={() => setVisible(!visible)}>
                {
                    visible ? <>Hide problem <IconWrapper><EyeOff /></IconWrapper></> :
                      <>Show problem <IconWrapper><Eye /></IconWrapper></>
                }
            </Controller>
            {visible && <ReactMarkdown escapeHtml={false} source={text} />}
        </Wrapper>
    )
};

export default Markdown;
