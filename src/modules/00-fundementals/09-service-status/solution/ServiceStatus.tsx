import React from 'react';
import {Service} from "../exercise/data";

interface HOCProps {
  data: Service
}

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#eaeaea',
  borderRadius: '8px',
  marginTop: '8px',
  padding: '8px',
};

function ServiceStatus({ data } : HOCProps) {
  return (
    <div style={wrapperStyle}>
      <div>{data.name} is {data.operational ? 'Operational' : 'Down'}</div>
    </div>
  )
}

export default ServiceStatus;
