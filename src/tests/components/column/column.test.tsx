import React from 'react';
import {shallow} from 'enzyme';

import Column from '../../../users/components/column';

describe('<Block> rendering', () => {
  it('renders 1 div', () => {
    const wrapper = shallow(<Column />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders div with column class name', () => {
    const wrapper = shallow(<Column />);
    expect(wrapper.find('div.column')).toHaveLength(1);
  });

  it('renders children if any', () => {
    const wrapper = shallow(<Column><div className='child'>content</div></Column>);
    expect(wrapper.find('div.child')).toHaveLength(1);
    expect(wrapper.find('div.child').text()).toEqual('content');
  });

  it('renders children if any', () => {
    const wrapper = shallow(<Column><div className='child'>content</div><div className='child'>content</div></Column>);
    expect(wrapper.find('div.child')).toHaveLength(2);
    expect(wrapper.find('div.child').at(0).text()).toEqual('content');
    expect(wrapper.find('div.child').at(1).text()).toEqual('content');
  });
});

