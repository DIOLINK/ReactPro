import { NavLink } from 'react-router-dom';
import { Route } from './routes';

export const ListNavigation = ({ routes }: { routes: Route[] }) => {
  return (
    <ul>
      {routes.map(({ to, name }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
