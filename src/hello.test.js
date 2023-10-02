import  React from 'react';
import Hello from "./Hello";
import {render} from '@testing-library/react'

test("Component should display hello Text",()=>{
  const component= render(<Hello/>);
  component.debug();
  let hellotext =component.getByText("Hello");
  expect(hellotext).toBeTruthy();
})

test("Component should display Avaible on Element",()=>{
  const component= render(<Hello/>);
  let hellotext =component.getByText("Hello");
  //Afficher le Tag Name
  console.log(hellotext.tagName)
  expect(hellotext.tagName).toBe('H1')
  //Afficher le contain in Element
  console.log(hellotext.textContent)
  expect(hellotext.textContent).toBe('Hello')
})