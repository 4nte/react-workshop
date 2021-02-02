import React from 'react';

type Props = {
    name: string,
}

const Hello = (props: Props) => {
    return <p>Hi, {props.name}</p>
};

export default Hello;