import React from 'react';
import UserCard from './UserCard';
import { render } from '@testing-library/react';
import { IUser } from '../../interfaces/Interface';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getUserFromStorage } from '../../../services/sessionStorageService';
import { MemoryRouter } from 'react-router-dom';
import { addFriendToDB } from '../../../services/apiUserService';
import { createDialog } from '../../../services/apiChatService';

configure({ adapter: new Adapter() });

const mockHistoryPush = jest.fn();

jest.mock('../../../services/apiUserService', () => ({
  addFriendToDB: jest.fn().mockResolvedValue('SUCCESS')
}));

jest.mock('../../../services/apiChatService', () => ({
  createDialog: jest.fn().mockResolvedValue(null)
}));

jest.mock('../../../services/sessionStorageService', () => ({
  getUserFromStorage: jest.fn().mockReturnValue({ _id: 'abc123' }).mockReturnValueOnce(null)
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

const userProps: IUser = {
  _id: '5fae8f5bac677440d079a289',
  about: 'hello',
  avatar: 'abc',
  birthday: new Date('1997-01-31T00:00:00.000Z'),
  country: 'Ukraine',
  countryCode: 'UK',
  firstName: 'Serhii',
  lastName: 'Kaliuzhnyi',
  learn: [
    {
      language: 'Ukrainian',
      level: 'Native'
    }
  ],
  speak: [
    {
      language: 'English',
      level: 'Intermediate'
    }
  ]
};

describe('UserCard test', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserCard mainInfo={userProps} />
      </MemoryRouter>
    );
  });

  it('Should redirect to / if user doesn`t exists in sessionStorage', () => {
    expect(getUserFromStorage).toReturnWith(null);
    //TODO check redirect to login if null
  });

  it('Should check links to profilePage are available', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserCard mainInfo={userProps} />
      </MemoryRouter>
    );
    const link = wrapper.find('.leftbar').at(1).prop('href');
    expect(link).toEqual('/user/5fae8f5bac677440d079a289');
  });

  it('Should call addFriendToDB by clicking on Add friend', () => {
    const wrapper = shallow(<UserCard mainInfo={userProps} />);
    const addFriend = wrapper.find('.add-friend');
    addFriend.simulate('click', {
      preventDefault: () => {}
    });
    expect(addFriendToDB).toBeCalled();
  });

  it('Should call createDialog by clicking on Send message', () => {
    const wrapper = shallow(<UserCard mainInfo={userProps} />);
    const addFriend = wrapper.find('.send-message');
    addFriend.simulate('click', {
      preventDefault: () => {}
    });
    expect(createDialog).toBeCalled();
  });

  it('Should render correct age from birthday', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserCard mainInfo={userProps} />
      </MemoryRouter>
    );
    const age = wrapper.find('.age').text();
    expect(age).toEqual('23 y.o.');
  });
});
