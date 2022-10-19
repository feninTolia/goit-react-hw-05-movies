import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BackLink = ({ children }) => {
  const location = useLocation();
  const locState = useRef(location.state?.from);

  return (
    <div>
      <Link to={locState.current ?? '/'}> {children}</Link>
    </div>
  );
};

export default BackLink;
