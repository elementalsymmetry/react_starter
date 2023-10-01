import React from 'react';
import logoSvg from '../../assets/images/logo.svg';

const Logo = (props) => {
  return <img src={logoSvg} alt="Logo" {...props} />;
}

export default Logo;
