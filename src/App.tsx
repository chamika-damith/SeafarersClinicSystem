import  { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.tsx';
import PatientManagement from './pages/PatientManagement.tsx';
import AppointmentManagement from './pages/AppointmentManagement.tsx';
import MedicalRecords from './pages/MedicalRecords.tsx';
import Reports from './pages/Reports.tsx';
import Settings from './pages/Settings.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <PatientManagement />;
      case 'appointments':
        return <AppointmentManagement />;
      case 'records':
        return <MedicalRecords />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="ml-64 flex-1">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;