import React from 'react';
import frameworkData from "../exercise/data";
import Framework from "./Framework";

function  Statistics() {
  return (
    <div>
     {frameworkData.map(framework => <Framework key={framework.id} data={framework} />)}
    </div>
  )
}

export default Statistics;
