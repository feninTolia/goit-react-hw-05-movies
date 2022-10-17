import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = ({ children }) => {
  return (
    <div>
      <Link to="/"> {children}</Link>
    </div>
  );
};

export default BackLink;
