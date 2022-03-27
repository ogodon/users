import React from 'react';
import {shallow} from 'enzyme';

import Text from '../../../users/components/text';
import { user } from '../../data/user.data';

describe('<Block> rendering', () => {
  it('renders 1 div with class simple-text', () => {
    const wrapper = shallow(<Text label='label example' value='value example' />);
    expect(wrapper.find('div.simple-text')).toHaveLength(1);
  });

  it('renders label', () => {
    const wrapper = shallow(<Text label='label example' value='value example' />);
    expect(wrapper.find('label').text()).toEqual('label example');
  });

  it('renders value', () => {
    const wrapper = shallow(<Text label='label example' value='value example' />);
    expect(wrapper.find('div.text').text()).toEqual('value example');
  });
});

