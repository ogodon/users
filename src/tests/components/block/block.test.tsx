import React from 'react';
import {shallow} from 'enzyme';

import Block from '../../../users/components/block';

describe('<Block> rendering', () => {
  it('renders 2 div', () => {
    const wrapper = shallow(<Block label='label test'></Block>);
    expect(wrapper.find('div')).toHaveLength(2);
  });

  it('renders div with block class name', () => {
    const wrapper = shallow(<Block label='label test'></Block>);
    expect(wrapper.find('div.block')).toHaveLength(1);
  });

  it('renders div with label class name', () => {
    const wrapper = shallow(<Block label='label test'></Block>);
    expect(wrapper.find('div.block-label')).toHaveLength(1);
    expect(wrapper.find('div.block-label').text()).toEqual('label test');
  });

  it('renders children if any', () => {
    const wrapper = shallow(<Block label='label test'><div className='child'>content</div></Block>);
    expect(wrapper.find('div.child')).toHaveLength(1);
    expect(wrapper.find('div.child').text()).toEqual('content');
  });

  it('renders children if any', () => {
    const wrapper = shallow(<Block label='label test'><div className='child'>content</div><div className='child'>content</div></Block>);
    expect(wrapper.find('div.child')).toHaveLength(2);
    expect(wrapper.find('div.child').at(0).text()).toEqual('content');
    expect(wrapper.find('div.child').at(1).text()).toEqual('content');
  });
});

