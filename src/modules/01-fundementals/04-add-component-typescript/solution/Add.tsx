import React from 'react';

type Props = {
    a: number
    b: number
}
const Add: React.FC<Props> = props => {
    return <div>{props.a + props.b}</div>
}

export default Add;