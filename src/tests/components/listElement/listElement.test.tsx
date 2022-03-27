import React from 'react';
import {shallow} from 'enzyme';

import ListElement from '../../../users/components/listElement';
import { user } from '../../data/user.data';

describe('<Block> rendering', () => {
  it('renders 1 div with class users-list', () => {
    const wrapper = shallow(<ListElement user={user} />);
    expect(wrapper.find('div.users-list-user')).toHaveLength(1);
  });

  it('renders Image correctly', () => {
    const wrapper = shallow(<ListElement user={user} />);
    expect(wrapper.find('Image')).toHaveLength(1);
    expect(wrapper.find('Image').prop('src')).toEqual('https://randomuser.me/api/portraits/thumb/men/34.jpg');
    expect(wrapper.find('Image').prop('alt')).toEqual('Cristobal Parra');
  });

  it('renders user name', () => {
    const wrapper = shallow(<ListElement user={user} />);
    expect(wrapper.find('div.user-name')).toHaveLength(1);
    expect(wrapper.find('div.user-name').text()).toMatch('Cristobal Parra');
  });

  it('renders user date of birth', () => {
    const wrapper = shallow(<ListElement user={user} />);
    expect(wrapper.find('div.user-dob')).toHaveLength(1);
  });
});

