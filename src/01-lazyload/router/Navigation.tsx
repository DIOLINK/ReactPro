import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { LazyPages1, LazyPages2, LazyPages3 } from '../pages';

export const Navigation = () => {
  const { pathname: url } = useLocation();

  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to={`${url}/lazy1`}>Lazy Pages 1</Link>
        </li>
        <li>
          <NavLink to={`${url}/lazy2`}>Lazy Pages 2</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/lazy3`}>Lazy Pages 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path={`${url}/lazy1`} element={<LazyPages1 />} />
        <Route path={`${url}/lazy2`} element={<LazyPages2 />} />
        <Route path={`${url}/lazy3`} element={<LazyPages3 />} />
      </Routes>
    </>
  );
};
