type TRoutes = {
  submenuName?: string;
  path?: string;
};

export type AppRoutes = {
  appName: string;
  appIcon?: string;
  routes: TRoutes[];
};

export const MfeNavRoutes: AppRoutes = {
  appName: 'Job Postings',
  appIcon: '/streaming/streaming-nav-icon.svg',
  routes: [
    {
      submenuName: 'Openings',
      path: 'job-postings/openings',
    },
    {
      submenuName: 'Submissions',
      path: 'job-postings/submissions',
    },
  ],
};
