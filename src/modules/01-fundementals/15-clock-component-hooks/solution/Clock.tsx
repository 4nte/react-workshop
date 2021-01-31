import React, {useEffect, useState} from 'react';

const Clock: React.FC = props => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalID);
  })

  return <div>
    {time.toLocaleTimeString()}
  </div>
};

export default Clock;