import { SideBar } from '../components/SideBar';
import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="flex h-screen bg-stone-200">
      <SideBar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}