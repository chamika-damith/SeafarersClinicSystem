import React from 'react';
import { Calendar, Users, Ship, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Users className="w-6 h-6" />}
          label="Total Patients"
          value="156"
          trend="+12% this month"
        />
        <StatCard
          icon={<Calendar className="w-6 h-6" />}
          label="Today's Appointments"
          value="8"
          trend="2 pending"
        />
        <StatCard
          icon={<Ship className="w-6 h-6" />}
          label="Maritime Assessments"
          value="45"
          trend="This month"
        />
        <StatCard
          icon={<AlertCircle className="w-6 h-6" />}
          label="Urgent Cases"
          value="2"
          trend="Requires attention"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AppointmentsList />
        <RecentPatients />
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend }: { 
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        {icon}
      </div>
      <span className="text-sm text-gray-500">{trend}</span>
    </div>
    <h3 className="text-2xl font-bold mb-1">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const AppointmentsList = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <h2 className="text-lg font-semibold mb-4">Today's Appointments</h2>
    <div className="space-y-4">
      {[
        { time: '09:00', patient: 'John Smith', type: 'Maritime Fitness Assessment' },
        { time: '10:30', patient: 'Mike Johnson', type: 'Regular Checkup' },
        { time: '11:45', patient: 'Robert Chen', type: 'Follow-up' },
      ].map((apt, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{apt.time}</span>
            <div>
              <p className="font-medium">{apt.patient}</p>
              <p className="text-sm text-gray-600">{apt.type}</p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">
            View
          </button>
        </div>
      ))}
    </div>
  </div>
);

const RecentPatients = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <h2 className="text-lg font-semibold mb-4">Recent Patients</h2>
    <div className="space-y-4">
      {[
        { name: 'David Wilson', vessel: 'Pacific Voyager', status: 'Fit' },
        { name: 'James Lee', vessel: 'Northern Star', status: 'Pending Review' },
        { name: 'Ahmed Hassan', vessel: 'Atlantic Pioneer', status: 'Temporarily Unfit' },
      ].map((patient, i) => (
        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">{patient.name}</p>
            <p className="text-sm text-gray-600">{patient.vessel}</p>
          </div>
          <span className={`px-3 py-1 text-sm rounded-full ${
            patient.status === 'Fit' ? 'bg-green-50 text-green-600' :
            patient.status === 'Pending Review' ? 'bg-yellow-50 text-yellow-600' :
            'bg-red-50 text-red-600'
          }`}>
            {patient.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;