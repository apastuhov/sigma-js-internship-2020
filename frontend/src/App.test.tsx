import React, { ReactNode } from 'react';
import App from './App';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock('./routes/Routes', () => () => <>Routes</>);

jest.mock('./components/storage/friends/friendsContext', () => ({
  FriendsProvider: ({ children }: { children?: ReactNode }) => <>{children}</>
}));

describe('App test', () => {
  let container: any = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container!);
    container?.remove();
    container = null;
  });

  it('should render App', () => {
    render(<App />, container);

    expect(container.querySelector('App')).toBeDefined();
    expect(container.querySelector('FriendsProvider')).toBeDefined();
    expect(container.querySelector('Routes')).toBeDefined();
  });
});
