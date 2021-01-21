import React from 'react';
import path from "path";
import fs from "fs";
import { render } from "@testing-library/react";
import serviceStatuses from "./exercise/data";
const servicesComponentFilePath = path.join(__dirname, './exercise/Services.tsx');
const serviceStatusFilePath = path.join(__dirname, './exercise/ServiceStatus.tsx');

describe('09', () => {
  it('Services.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(servicesComponentFilePath)).toBeTruthy();
  });

  it('ServiceStatus.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(servicesComponentFilePath)).toBeTruthy();
  });

  it('ServiceStatus component renders data', () => {
    const ServiceStatus = require(serviceStatusFilePath).default;
    const { getByText } = render(<ServiceStatus data={serviceStatuses[0]} />);
    expect(getByText(`${serviceStatuses[0].name} is ${serviceStatuses[0].operational ? 'Operational' : 'Down'}`)).toBeInTheDocument();

  });

  it('Services renders all data', () => {
    const Services = require(servicesComponentFilePath).default;
    const { getByText } = render(<Services />);
    serviceStatuses.map(data => {
      expect(getByText(`${data.name} is ${data.operational ? 'Operational' : 'Down'}`)).toBeInTheDocument();
    })
  });
});
