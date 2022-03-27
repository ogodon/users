import React from 'react';
import {shallow} from 'enzyme';

import Image from '../../../users/components/image';

describe('<Image> rendering', () => {
  it('renders an <img> with src link and alt description', () => {
    const wrapper = shallow(<Image src='link' alt='description' />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').prop('src')).toEqual('link');
    expect(wrapper.find('img').prop('alt')).toEqual('description');
  });

  it('renders an <img> without rounded class name when no rounded prop', () => {
    const wrapper = shallow(<Image src='link' alt='description' />);
    expect(wrapper.find('img.rounded')).toHaveLength(0);
  });

  it('renders an <img> with rounded class name when no rounded prop set to true', () => {
    const wrapper = shallow(<Image src='link' alt='description' rounded={true} />);
    expect(wrapper.find('img.rounded')).toHaveLength(1);
  });
});

