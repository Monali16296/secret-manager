import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SubmitSecret = lazy(() => import('./pages/SubmitSecret'));
const ViewSecret = lazy(() => import('./pages/ViewSecret'));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<SubmitSecret />} />
      <Route path="/secret/:id" element={<ViewSecret />} />
    </Routes>
  </Suspense>
);

export default AppRoutes; 