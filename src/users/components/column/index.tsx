import React, { ReactElement } from 'react';

import './index.css';

type Props = {
  children?: ReactElement|Array<ReactElement>,
  className?: string
};

const Column = ({ children, className = '' }: Props) => {
  return <div className={`column ${className}`}>
    {children}
  </div>
};

export default Column;