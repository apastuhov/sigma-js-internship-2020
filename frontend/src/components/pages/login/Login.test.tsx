import React from 'react';
import Login from './Login';
import { render } from '@testing-library/react';
import { getUserFromStorage } from '../../../services/sessionStorageService';

const mockHistoryPush = jest.fn();

jest.mock('../../../services/sessionStorageService', () => ({
  getUserFromStorage: jest.fn().mockReturnValue({ _id: 'abc123' }).mockReturnValueOnce(null)
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe('Login test', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('Shouldn`t throw an error, if user doesn`t exists in sessionStorage', () => {
    expect(getUserFromStorage).lastReturnedWith(null);
    expect(getUserFromStorage).not.toThrow();
  });

  it('Should redirect to user/:id, if user exists in sessionStorage', () => {
    expect(getUserFromStorage).lastReturnedWith({ _id: 'abc123' });
    expect(mockHistoryPush).toHaveBeenCalledWith('/user/abc123');
  });
});
