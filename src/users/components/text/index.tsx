import React from 'react';

import './index.css';

type Props = {
  label: string,
  value: string|number
};

const Text = ({ label, value }: Props) => {
  return <div className='simple-text'>
    <label className='label'>{label}</label>
    <div className='text-wrapper'>
      <div className='text'>{value}</div>
    </div>
  </div>
};

export default Text;