import { Navigate, Route, Routes } from 'react-router-dom';
import { Route as RouteType } from './routes';

export const ListRoutes = ({ routes }: { routes: RouteType[] }) => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
    </Routes>
  );
};
