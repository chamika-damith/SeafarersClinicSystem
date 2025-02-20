import {useEffect, useState} from 'react';
import { Search, Plus, Edit2, Trash2, Ship, User, Book } from 'lucide-react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.tsx";
import {deletePatient, getAllPatient} from "../redux/PatientSlice.ts";
import AddPatientForm from "../components/patient/AddPatientForm.tsx";
import EditPatientForm from "../components/patient/EditPatientForm.tsx";

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditdModal, setShowEditModal] = useState(false);
  const [currentPatientData, setCurrentPatientData] = useState(null);

  const patients = useSelector((state:RootState)=>state.patient);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllPatient());
  }, [dispatch]);


  async function handleDeletePatinet(id) {
    console.log("Deleting patient with code:", id);
    await dispatch(deletePatient(id));
    dispatch(getAllPatient());
  };

  const handleEditButtonClick = (patient) => {
    setCurrentPatientData(patient);
    setShowEditModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add New Patient
        </button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seaman Book</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vessel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <User className="w-8 h-8 bg-blue-50 p-1.5 rounded-full text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium">{patient.name}</div>
                        <div className="text-sm text-gray-500">{patient.nationality}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Book className="w-4 h-4 text-gray-400 mr-2" />
                      {patient.seamanBookNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Ship className="w-4 h-4 text-gray-400 mr-2" />
                      {patient.vesselName || 'Not Assigned'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-600">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded"
                              onClick={() => handleEditButtonClick(patient)}
                      >
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded"
                              onClick={() => handleDeletePatinet(patient.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
          <AddPatientForm setShowAddModal={setShowAddModal} />
      )}

      {showEditdModal && (
          <EditPatientForm  setShowEditModal={setShowEditModal} patient={currentPatientData}/>
      )}
    </div>
  );
};

export default PatientManagement;