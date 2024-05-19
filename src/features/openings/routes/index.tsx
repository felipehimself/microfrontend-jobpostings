import { Route, Routes } from 'react-router-dom';
import { Openings } from './openings';

export const OpeningRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Openings />} />
    </Routes>
  );
};
