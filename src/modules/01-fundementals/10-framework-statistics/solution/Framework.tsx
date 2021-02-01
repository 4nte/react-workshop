import React from 'react';
import {FrameworkType} from "../exercise/data";

type Props = {
  data: FrameworkType
}

function Framework({ data }: Props) {
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
