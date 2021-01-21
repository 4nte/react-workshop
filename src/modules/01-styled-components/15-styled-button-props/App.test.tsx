import React from 'react';
import Button from './exercise/Button';
import 'jest-styled-components'
import {render} from "@testing-library/react";
import fs from "fs";
import path from "path";
const buttonComponent = path.join(__dirname, './exercise/Button.tsx');


describe('15', () => {
  it('Button.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(buttonComponent)).toBeTruthy();
  });

  it('Has normal button style', () => {
    const { container } = render(<Button primary={false}/>);
    expect(container.firstChild).toHaveStyleRule('color', '#4a76ea');
    expect(container.firstChild).toHaveStyleRule('border-radius', '5px');
    expect(container.firstChild).toHaveStyleRule('padding', '10px');
    expect(container.firstChild).toHaveStyleRule('background-color', 'white');
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #4a76ea');
  });

  it('Has primary button style', () => {
    const { container } = render(<Button primary={true}/>);
    expect(container.firstChild).toHaveStyleRule('color', 'white');
    expect(container.firstChild).toHaveStyleRule('border-radius', '5px');
    expect(container.firstChild).toHaveStyleRule('padding', '10px');
    expect(container.firstChild).toHaveStyleRule('background-color', '#4a76ea');
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #4a76ea');
  });
});
