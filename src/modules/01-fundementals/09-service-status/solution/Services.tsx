import React from 'react';
import serviceStatuses from "../exercise/data";
import ServiceStatus from "./ServiceStatus";

function Services() {
  return (
    <div>
      {serviceStatuses.map(service => <ServiceStatus key={service.id} data={service} />)}
    </div>
  )
}

export default Services;
