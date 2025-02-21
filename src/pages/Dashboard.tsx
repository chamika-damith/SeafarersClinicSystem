import React from 'react';
import { Calendar, Users, Ship, AlertCircle } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    icon={<Users className="w-6 h-6 text-indigo-600" />}
                    label="Total Patients"
                    value="156"
                    trend="+12% this month"
                />
                <StatCard
                    icon={<Calendar className="w-6 h-6 text-teal-600" />}
                    label="Today's Appointments"
                    value="8"
                    trend="2 pending"
                />
                <StatCard
                    icon={<Ship className="w-6 h-6 text-blue-600" />}
                    label="Maritime Assessments"
                    value="45"
                    trend="This month"
                />
                <StatCard
                    icon={<AlertCircle className="w-6 h-6 text-red-600" />}
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
    <div className="bg-white rounded-lg p-6 shadow-lg transition-all hover:shadow-2xl">
        <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
                {icon}
            </div>
            <span className="text-sm text-gray-500">{trend}</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
        <p className="text-gray-600">{label}</p>
    </div>
);

const AppointmentsList = () => (
    <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Appointments</h2>
        <div className="space-y-4">
            {[
                { time: '09:00', patient: 'John Smith', type: 'Maritime Fitness Assessment' },
                { time: '10:30', patient: 'Mike Johnson', type: 'Regular Checkup' },
                { time: '11:45', patient: 'Robert Chen', type: 'Follow-up' },
            ].map((apt, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-indigo-50">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-700">{apt.time}</span>
                        <div>
                            <p className="font-medium text-gray-900">{apt.patient}</p>
                            <p className="text-sm text-gray-500">{apt.type}</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 text-sm bg-teal-400 text-white rounded-lg hover:bg-teal-500">
                        View
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const RecentPatients = () => (
    <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Patients</h2>
        <div className="space-  y-4">
            {[
                { name: 'David Wilson', vessel: 'Pacific Voyager', status: 'Fit' },
                { name: 'James Lee', vessel: 'Northern Star', status: 'Pending Review' },
                { name: 'Ahmed Hassan', vessel: 'Atlantic Pioneer', status: 'Temporarily Unfit' },
            ].map((patient, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-indigo-50">
                    <div>
                        <p className="font-medium text-gray-900">{patient.name}</p>
                        <p className="text-sm text-gray-500">{patient.vessel}</p>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full 
            ${patient.status === 'Fit' ? 'bg-green-100 text-green-600' :
                        patient.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'}`}>
            {patient.status}
          </span>
                </div>
            ))}
        </div>
    </div>
);

export default Dashboard;
