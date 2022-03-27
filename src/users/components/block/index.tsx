import React, { ReactElement } from 'react';

import './index.css';

type Props = {
  label: string,
  children?: ReactElement|Array<ReactElement>
};

const Block = ({ label, children }: Props) => {
  return <div className='block'>
    <div className='block-label'>{label}</div>
    {children}
  </div>
};

export default Block;