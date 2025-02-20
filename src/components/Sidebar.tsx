import React from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  Anchor,
  BarChart,
  LayoutDashboard
} from 'lucide-react';

interface SidebarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Sidebar = ({ onPageChange, currentPage }: SidebarProps) => {
  return (
    <div className="h-screen w-64 bg-slate-800 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <Anchor className="w-8 h-8" />
        <h1 className="text-xl font-bold">SeaCare Clinic</h1>
      </div>
      
      <nav className="space-y-2">
        <NavItem 
          icon={<LayoutDashboard />} 
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
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      active ? 'bg-slate-700' : 'hover:bg-slate-700'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Sidebar;