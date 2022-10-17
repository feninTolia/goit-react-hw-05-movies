import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <div className={css.sharedLayout}>
        <NavLink to="/" end className={css.btn}>
          Home
        </NavLink>

        <NavLink to="/Movies" className={css.btn}>
          Movies
        </NavLink>
      </div>
      <div className={css.sharedLayoutOutlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
