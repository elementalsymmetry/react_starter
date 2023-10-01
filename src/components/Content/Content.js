import React from 'react';
import './Content.css';

const Content = (props) => {
  return (
    <div className="content-container">
      { props.children }
    </div>
  );
}

export default Content;
