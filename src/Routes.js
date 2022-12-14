import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateForm from './pages/CreateForm';
import RecentForms from './pages/RecentForms';
import RecentOne from './pages/RecentOne';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecentForms />} />
      <Route path="/create" element={<CreateForm />} />
      <Route path="/recent/:id" element={<RecentOne />} />
    </Routes>
  );
}
