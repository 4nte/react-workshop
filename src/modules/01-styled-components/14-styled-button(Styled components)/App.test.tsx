import React from 'react';
import Button from './exercise/Button';
import 'jest-styled-components'
import {render} from "@testing-library/react";
import fs from "fs";
import path from "path";
const buttonComponent = path.join(__dirname, './exercise/Button.tsx');


describe('14', () => {
  it('Button.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(buttonComponent)).toBeTruthy();
  });

  it('Has style', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toHaveStyleRule('color', '#0f57c7');
    expect(container.firstChild).toHaveStyleRule('border-radius', '5px');
    expect(container.firstChild).toHaveStyleRule('padding', '15px');
    expect(container.firstChild).toHaveStyleRule('background', 'white');
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #0f57c7');
  });
});
