import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
