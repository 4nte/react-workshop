import React from 'react';
import {FrameworkType} from "../exercise/data";

interface HOCProps {
  data: FrameworkType
}

function  Framework({ data }: HOCProps) {
  return (
    <div style={{backgroundColor: "#eaeaea", marginTop: 10, padding: 5}}>
      <div>Name: {data.name}</div>
      <div>Popularity: {data.popularity}</div>
      <div>GitHub stars: {data.gitHubStars}</div>
      <div>Ranked: {data.ranked}</div>
    </div>
  )
}

export default Framework;
