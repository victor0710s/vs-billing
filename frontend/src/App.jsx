import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from './layout/AuthLayout.jsx';
import { AppLayout } from './layout/AppLayout.jsx';
import { Login } from './pages/Login/index.jsx';
import { Home } from './pages/Home/index.jsx';
import { SignIn } from './pages/SignIn/index.jsx';
import { ForgotPass } from './pages/ForgotPass/index.jsx';
import { Dashboard } from './pages/GeneralDashboard/index.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home route */}

      <Route element={<AuthLayout />}>
        <Route path="/login" index element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
      </Route>

      <Route element={<AppLayout />}>
        {/* Protected routes can be added here */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
