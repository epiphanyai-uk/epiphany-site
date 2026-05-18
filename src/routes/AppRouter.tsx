import { Routes, Route, Navigate } from 'react-router-dom';
import About from "../pages/About.tsx";
import Contact from '../pages/Contact.tsx';
import Home from '../pages/Home.tsx';
import Layout from '../components/Layout'

const AppRouter = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;