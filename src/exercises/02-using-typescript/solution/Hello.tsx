import React from 'react';

type Props = {
    name: string,
}

const Hello: React.FC<Props> = (props) => {
    return <p>Hi, {props.name}</p>
};

export default Hello;


interface Person {
    firstName: string,
    lastName: string,
    age: number
}