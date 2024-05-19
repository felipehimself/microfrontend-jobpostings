import { lazyImport } from '@/utils/lazy-import';
import { Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { Fallback } from '@/components/shared/fallback';
import { AppLayout } from './../components/layout';

const { OpeningRoutes } = lazyImport(
  () => import('@/features/openings'),
  'OpeningRoutes'
);
const { SubmissionsRoutes } = lazyImport(
  () => import('@/features/submissions'),
  'SubmissionsRoutes'
);

const App = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'job-postings/openings/*',
        element: <OpeningRoutes />,
      },
      {
        path: 'job-postings/submissions/*',
        element: <SubmissionsRoutes />,
      },
    ],
  },
];
