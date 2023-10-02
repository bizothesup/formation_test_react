import  React from 'react';
import Hello from "./Hello";
import {render} from '@testing-library/react'

test("Component should display hello Text",()=>{
  const component= render(<Hello/>);
  component.debug();
  let hellotext =component.getByText("Hello");
  expect(hellotext).toBeTruthy();
})