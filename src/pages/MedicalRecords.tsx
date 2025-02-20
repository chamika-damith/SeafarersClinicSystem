import {useEffect, useState} from 'react';
import {Search, FileText, User, Plus, MoreVertical} from 'lucide-react';
import type {MedicalRecord} from '../model/types.ts';
import AddRecordForm from "@/components/medicalRecord/AddRecordForm.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store.tsx";
import {deleteMedicalRecord, getAllMedicalRecord} from "@/redux/MedicalRecordSlice.ts";

const MedicalRecords = () => {
    const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    const records = useSelector((state: RootState) => state.medicalRecord);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllMedicalRecord());
    }, [dispatch]);

    async function handleDeleteMedicalRecord(id) {
        console.log("Deleting record with code:", id);
        await dispatch(deleteMedicalRecord(id));
        dispatch(getAllMedicalRecord());
        setOpenMenu(null)
    };

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (id) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Medical Records</h1>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => setShowAddModal(true)}
                >
                    <Plus className="w-4 h-4"/>
                    New Record
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="relative mb-4">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            <input
                                type="text"
                                placeholder="Search records..."
                                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="space-y-3">
                            {records.map((record) => (
                                <div
                                    key={record.id}
                                    className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 flex justify-between"
                                    onClick={() => setSelectedRecord(record)}
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <FileText className="w-5 h-5 text-blue-600"/>
                                            <span
                                                className="font-medium">{record.appointment?.appointmentType || "N/A"}</span>
                                        </div>
                                        <div
                                            className="text-sm text-gray-600">{record.appointment?.patient?.name || "Unknown"}</div>
                                        <div className="text-sm text-gray-500">{record.date}</div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="relative mb-5">
                                            <button onClick={() => toggleMenu(record.id)}
                                                    className="p-2 rounded-full hover:bg-gray-200">
                                                <MoreVertical className="w-5 h-5 text-gray-600"/>
                                            </button>
                                            {openMenu === record.id && (
                                                <div
                                                    className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-md p-2">
                                                    <button
                                                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                                        onClick={() => handleDeleteMedicalRecord(record.id)}
                                                    >Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        {selectedRecord ? (
                            <div>
                                {/* Header Section */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <User className="w-12 h-12 bg-blue-100 p-3 rounded-full text-blue-600"/>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900">
                                                {selectedRecord.appointment.patient.name}
                                            </h2>
                                            <div className="text-sm text-gray-500">
                                                {selectedRecord.appointment.appointmentType}
                                            </div>
                                        </div>
                                    </div>
                                    <span
                                        className={`px-3 py-1 text-sm rounded-full ${
                                            selectedRecord.maritimeFitnessStatus === "Fit"
                                                ? "bg-green-100 text-green-600"
                                                : selectedRecord.maritimeFitnessStatus === "Temporarily Unfit"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                        }`}
                                    >
          {selectedRecord.maritimeFitnessStatus}
        </span>
                                </div>

                                {/* Details Section */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <div className="text-xs uppercase font-medium text-gray-500">
                                            Date of Examination
                                        </div>
                                        <div className="font-medium text-gray-800">{selectedRecord.date}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-medium text-gray-500">
                                            Next Review Date
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            {selectedRecord.nextCheckup || "Not Scheduled"}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-medium text-gray-500">
                                            Vessel
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            {selectedRecord.appointment.patient.vesselName || "N/A"}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase font-medium text-gray-500">
                                            Seaman Book Number
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            {selectedRecord.appointment.patient.seamanBookNumber || "N/A"}
                                        </div>
                                    </div>
                                </div>

                                {/* Medical Record Sections */}
                                <div className="space-y-6">
                                    <section>
                                        <h3 className="font-semibold text-gray-900 mb-2">Diagnosis</h3>
                                        <p className="text-gray-700">{selectedRecord.diagnosis || "N/A"}</p>
                                    </section>

                                    <section>
                                        <h3 className="font-semibold text-gray-900 mb-2">Treatment Plan</h3>
                                        <p className="text-gray-700">{selectedRecord.treatment || "N/A"}</p>
                                    </section>

                                    <section>
                                        <h3 className="font-semibold text-gray-900 mb-2">Medications</h3>
                                        <ul className="list-disc list-inside text-gray-700">
                                            {selectedRecord.medications
                                                ? selectedRecord.medications
                                                    .split(",")
                                                    .map((med, index) => <li key={index}>{med.trim()}</li>)
                                                : "No Medications Prescribed"}
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="font-semibold text-gray-900 mb-2">Doctor's Notes</h3>
                                        <p className="text-gray-700">{selectedRecord.doctorNotes || "N/A"}</p>
                                    </section>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-12">
                                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400"/>
                                <p>Select a medical record to view details</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            {showAddModal && (
                <AddRecordForm setShowAddModal={setShowAddModal}/>
            )}
        </div>
    );
};

export default MedicalRecords;