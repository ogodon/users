import React from 'react';
import {shallow, mount} from 'enzyme';

import { Editable, FieldType } from '../../../users/components/editable';
import { user } from '../../data/user.data';

describe('<Editable> rendering', () => {
  it('renders', () => {
    const wrapper = shallow(<Editable user={user} property='gender' label='gender' value={user.gender} field={FieldType.select} dispatch={() => {}} type={FieldType} />);
    expect(wrapper.find('div.editable')).toHaveLength(1);
  });

  it('contains a select element when click on value', () => {
    const wrapper = mount(<Editable user={user} property='gender' label='gender' value={user.gender} field={FieldType.select} dispatch={() => {}} type={FieldType} />);
    const text = wrapper.find('div.text');
    text.simulate('click');
    expect(wrapper.find('select')).toHaveLength(1);
  });
});
