import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';
import {getUserFromStorage} from '../../../services/sessionStorageService';

const mockHistoryPush = jest.fn();

jest.mock('../../../services/sessionStorageService', () => ({
  getUserFromStorage: jest.fn().mockReturnValue({_id:'abc123'})
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Login test', () => {
  it('Should call sessionStorage getItem on render', () => {
    render(<Login />);
    expect(getUserFromStorage).toHaveBeenCalled();
  });

  it('Should redirect to user/:id, if user exists in sessionStorage', () => {
    render(<Login />);
    expect(getUserFromStorage).lastReturnedWith({_id: "abc123"});
    expect(mockHistoryPush).toHaveBeenCalledWith('/user/abc123');
  });
});
