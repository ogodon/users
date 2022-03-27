import React from 'react';
import {shallow, mount} from 'enzyme';

import { UserDetail } from '../../../users/components/user';
import { user } from '../../data/user.data';

describe('<Editable> rendering', () => {
  it('renders', () => {
    const wrapper = shallow(<UserDetail user={user} />);
    expect(wrapper.find('div.user')).toHaveLength(1);
  });

  it('contains 22 EditableConnected componenté', () => {
    const wrapper = shallow(<UserDetail user={user} />);
    expect(wrapper.find('EditableConnected')).toHaveLength(22);
  });

  it('contains 2 Text componenté', () => {
    const wrapper = shallow(<UserDetail user={user} />);
    expect(wrapper.find('Text')).toHaveLength(2);
  });
});
