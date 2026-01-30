import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from './layout/AuthLayout.jsx';
import { AppLayout } from './layout/AppLayout.jsx';
import { PrivateRoute } from '../../backend/src/routes/PrivateRoute.jsx';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { ForgotPass } from './pages/ForgotPass';
import { Dashboard } from './pages/GeneralDashboard';

export default function App() {
  return (
    <Routes>
      {/* Pública */}
      <Route path="/" element={<Home />} />

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
      </Route>

      {/* Protegida */}
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* futuras telas */}
          {/* <Route path="/transactions" element={<Transactions />} /> */}
          {/* <Route path="/cards" element={<Cards />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}