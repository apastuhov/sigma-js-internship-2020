import React  from 'react';
import Login from './Login';
import { render, fireEvent, waitForElement } from "@testing-library/react";

// const { createBrowserHistory } =  require('history');
// const history = createBrowserHistory(/* ... */);
// jest.spyOn(history, "push");

describe('Login test', () => {

  // beforeEach(() => {
  //   Object.defineProperty(window, "sessionStorage", {
  //     value: {
  //       getItem: jest.fn(() => 3),
  //       setItem: jest.fn(() => null)
  //     },
  //     writable: true
  //   });
  // });

  // jest.spyOn(window.sessionStorage.__proto__, 'getItem');
  // window.sessionStorage.__proto__.getItem = jest.fn();
  //
  const spy = jest.spyOn(Storage.prototype, 'getItem');

  it('Should call sessionStorage getItem on render', () => {
    render(<Login/>);
    expect(spy).toHaveBeenCalled();
  });

  it('if user exists in sessionStorage, it will redirect to user/:id ', () => {
    render(<Login/>);
    expect(spy).toBeCalledWith('loginedUser');
    //TODO Check history push
    // 1) get id from sessionStorage
    // 2) check redirect to /user/:id

  });

});
