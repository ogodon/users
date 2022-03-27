import React from 'react';
import {shallow} from 'enzyme';

import { List } from '../../../users/components/list';
import { users } from '../../data/users.data';

describe('<Block> rendering', () => {
  it('renders 1 div with class users-list', () => {
    const wrapper = shallow(<List users={users} />);
    expect(wrapper.find('div.users-list')).toHaveLength(1);
  });

  it('renders 20 div with class users-list-user-wrapper', () => {
    const wrapper = shallow(<List users={users} />);
    expect(wrapper.find('div.users-list-user-wrapper')).toHaveLength(20);
  });

  it('renders 20 Link', () => {
    const wrapper = shallow(<List users={users} />);
    expect(wrapper.find('Link')).toHaveLength(20);
  });

  it('renders first Link with correct "to" prop', () => {
    const wrapper = shallow(<List users={users} />);
    expect(wrapper.find('Link').at(0).prop('to')).toEqual('/user/Cristobal/Parra/3aa03886-86cb-4d9c-af28-bf8504ce83f5');
  });

  it('renders 20 ListElement', () => {
    const wrapper = shallow(<List users={users} />);
    expect(wrapper.find('ListElement')).toHaveLength(20);
  });

  it('renders first ListElement with prop user correctly passed', () => {
    const wrapper = shallow(<List users={users} />);
    expect(wrapper.find('ListElement').at(0).prop('user')).toEqual(users[0]);
  });
});

