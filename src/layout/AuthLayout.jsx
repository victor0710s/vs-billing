import { Outlet } from 'react-router-dom';

export function AuthLayout({ children }) {
  return (
    <div className="bg-stone-200 min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  )
}