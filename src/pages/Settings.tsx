import React from 'react';
import { User, Building, Bell, Shield, Printer, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Clinic Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
                <input
                  type="text"
                  defaultValue="SeaCare Clinic"
                  className="w-full rounded-lg border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                <input
                  type="text"
                  defaultValue="MC-12345"
                  className="w-full rounded-lg border-gray-300"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  defaultValue="123 Harbor Street, Port City"
                  className="w-full rounded-lg border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 234 567 8900"
                  className="w-full rounded-lg border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="contact@seacareclinic.com"
                  className="w-full rounded-lg border-gray-300"
                />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">System Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Automatic Backups</div>
                  <div className="text-sm text-gray-500">Daily backup of all medical records</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-sm text-gray-500">Send appointment reminders to patients</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Dark Mode</div>
                  <div className="text-sm text-gray-500">Switch to dark color scheme</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password Requirements</label>
                <select className="w-full rounded-lg border-gray-300">
                  <option>High (12+ chars, special chars required)</option>
                  <option>Medium (8+ chars, mixed case)</option>
                  <option>Basic (8+ chars)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Session Timeout</label>
                <select className="w-full rounded-lg border-gray-300">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>4 hours</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Two-Factor Authentication</div>
                  <div className="text-sm text-gray-500">Additional security for all staff accounts</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <User className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">User Management</div>
                  <div className="text-sm text-gray-500">Manage staff accounts</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <Building className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium">Department Setup</div>
                  <div className="text-sm text-gray-500">Configure departments</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <Bell className="w-5 h-5 text-yellow-600" />
                <div>
                  <div className="font-medium">Notifications</div>
                  <div className="text-sm text-gray-500">Configure alerts</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <Shield className="w-5 h-5 text-red-600" />
                <div>
                  <div className="font-medium">Security Log</div>
                  <div className="text-sm text-gray-500">View security events</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <Printer className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium">Print Settings</div>
                  <div className="text-sm text-gray-500">Configure printers</div>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <Globe className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-medium">Language</div>
                  <div className="text-sm text-gray-500">Change system language</div>
                </div>
              </button>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">System Information</h2>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">Version</div>
                <div className="font-medium">2.1.0</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Last Update</div>
                <div className="font-medium">March 15, 2024</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">License Valid Until</div>
                <div className="font-medium">December 31, 2024</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;