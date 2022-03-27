import React from 'react';

import './index.css';

type Props = {
  src: string,
  alt: string,
  rounded?: boolean
};

const Image = ({ src, alt, rounded = false }: Props) => {
  return <img className={`img ${rounded ? "rounded" : ""}`} src={src} alt={alt} />;
};

export default Image;