import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from './layout/AuthLayout.jsx';
import { Login } from './pages/Login/index.jsx';
import { ForgotPass } from './pages/ForgotPass/index.jsx';
import { Home } from './pages/Home/index.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home route */}
      <Route element={<AuthLayout />}>
        <Route path="/login" index element={<Login />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
      </Route>
    </Routes>
  ) 
}
