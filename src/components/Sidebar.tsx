import React from 'react';
import {
  Users,
  Calendar,
  FileText,
  Settings,
  Anchor,
  BarChart,
  LayoutDashboard, LogOut
} from 'lucide-react';

interface SidebarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
  onLogout?: () => void;
}

const Sidebar = ({ onPageChange, currentPage, onLogout }: SidebarProps) => {
  return (
      <div className="h-screen w-64 bg-white/30 backdrop-blur-lg shadow-xl p-4 fixed left-0 top-0 flex flex-col justify-between border border-white/20 ">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Anchor className="w-8 h-8 text-green-600"/>
            <h1 className="text-2xl font-bold text-gray-800">SeaCare Clinic</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            <NavItem
                icon={<LayoutDashboard/>}
                label="Dashboard"
                path="dashboard"
                active={currentPage === 'dashboard'}
                onClick={() => onPageChange('dashboard')}
            />
            <NavItem
                icon={<Users />}
                label="Patients"
                path="patients"
                active={currentPage === 'patients'}
                onClick={() => onPageChange('patients')}
            />
            <NavItem
                icon={<Calendar />}
                label="Appointments"
                path="appointments"
                active={currentPage === 'appointments'}
                onClick={() => onPageChange('appointments')}
            />
            <NavItem
                icon={<FileText />}
                label="Medical Records"
                path="records"
                active={currentPage === 'records'}
                onClick={() => onPageChange('records')}
            />
            <NavItem
                icon={<BarChart />}
                label="Reports"
                path="reports"
                active={currentPage === 'reports'}
                onClick={() => onPageChange('reports')}
            />
            <NavItem
                icon={<Settings />}
                label="Settings"
                path="settings"
                active={currentPage === 'settings'}
                onClick={() => onPageChange('settings')}
            />
          </nav>
        </div>

        {/* Logout Button */}
        {onLogout && (
            <button
                onClick={onLogout}
                className="flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-all text-white shadow-md w-full font-semibold"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-semibold">Logout</span>
            </button>
        )}
      </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl font-medium transition-all ${
            active
                ? "bg-gradient-to-r from-green-500 to-teal-400 text-white shadow-md"
                : "hover:bg-gray-200 text-gray-700"
        }`}
    >
      {icon}
      <span>{label}</span>
    </button>
);

export default Sidebar;
