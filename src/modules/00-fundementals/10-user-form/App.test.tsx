import React from 'react';
import path from "path";
import fs from "fs";
import {render} from "@testing-library/react";
const formComponent = path.join(__dirname, './exercise/UserForm.tsx');
import {shallow} from "enzyme";
import UserForm from "./exercise/UserForm";

describe('10', () => {
  it('UserForm.tsx file exists', () => {
    // Assert if file exists
    expect(fs.existsSync(formComponent)).toBeTruthy();
  });

  it('Form component renders First name input and label', () => {
    const Form = require(formComponent).default;
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText(`First name`)).toBeInTheDocument();
  });

  it('Form component renders Last name input and label', () => {
    const Form = require(formComponent).default;
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText(`Last name`)).toBeInTheDocument();
  });

  it('Form component renders Username input and label', () => {
    const Form = require(formComponent).default;
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText(`Username`)).toBeInTheDocument();
  });

  it('Form component renders submit button', () => {
    const wrapper = shallow(<UserForm />);
    expect(wrapper.find({type: "submit"})).toHaveLength(1);
  });

  it('Should be initial state', () => {
    const wrapper = shallow(<UserForm />);
    const initialState = {
      form: {
        firstName: '',
        lastName: '',
        username: '',
      },
      users: []
    };
    expect(wrapper.state("form")).toStrictEqual(initialState.form);
    expect(wrapper.state("users")).toStrictEqual(initialState.users);
  });

  // todo add tests for form submit and users rendering
});
