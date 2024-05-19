import { Route, Routes } from 'react-router-dom';
import { Submissions } from './submissions';

export const SubmissionsRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Submissions />} />
    </Routes>
  );
};
