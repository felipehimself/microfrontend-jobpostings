export type TRoutes = {
  submenuName: string;
  path: string;
};

export type TAppRoutes = {
  appName: string;
  path: string;
  appIcon: string;
  routes: TRoutes[];
};

export const MfeNavRoutes: TAppRoutes = {
  appName: 'Job Postings',
  path: 'job-postings',
  appIcon: 'JobPostings',
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
