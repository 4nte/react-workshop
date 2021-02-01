import React, {useEffect, useState} from 'react';


const ClickCounter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Increment</button>
      <button onClick={() => setCounter(counter-1)}>Decrement</button>
    </>
  )
}

export default ClickCounter;
