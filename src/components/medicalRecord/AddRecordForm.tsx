import React, { useState } from 'react';
import {AppDispatch, RootState} from "../../store/store.tsx";
import {useDispatch, useSelector} from "react-redux";
import { Search } from "lucide-react";
import {getAllMedicalRecord, saveMedicalRecord} from "@/redux/MedicalRecordSlice.ts";
import {getAppointment} from "@/redux/AppointmentSlice.ts";

const AddRecordForm = ({ setShowAddModal }) => {
    const [appointmentId, setAppointmentId] = useState("");
    const [date, setDate] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [treatment, setTreatment] = useState("");
    const [medications, setMedications] = useState("");
    const [nextCheckup, setNextCheckup] = useState("");
    const [doctorNotes, setDoctorNotes] = useState("");
    const [maritimeFitnessStatus, setMaritimeFitnessStatus] = useState("Fit");

    const appointments = useSelector((state: RootState) => state.appointment);

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        const appointment = await dispatch(getAppointment(appointmentId)).unwrap();
        const medicalRecord = {
            id: crypto.randomUUID(),
            date,
            diagnosis,
            treatment,
            medications,
            nextCheckup,
            doctorNotes,
            maritimeFitnessStatus,
            appointment,
        };

        // Log or save medical record data here
        console.log('Medical Record:', medicalRecord);

        // Save medical record data
        await dispatch(saveMedicalRecord(medicalRecord));
        dispatch(getAllMedicalRecord())


        // Close modal
        setShowAddModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Medical Record</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Appointments Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Appointments</label>
                        <div className="relative">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            <select
                                value={appointmentId}
                                onChange={(e) => setAppointmentId(e.target.value)}
                                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                required
                            >
                                <option value="">Select Appointments</option>
                                {appointments.map((appointment) => (
                                    <option key={appointment.id} value={appointment.id}>
                                        {appointment.appointmentType} ({appointment.id})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Date of Examination & Diagnosis */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Examination</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
                            <input
                                type="text"
                                value={diagnosis}
                                onChange={(e) => setDiagnosis(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                required
                            />
                        </div>
                    </div>

                    {/* Treatment */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                        <textarea
                            value={treatment}
                            onChange={(e) => setTreatment(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                        />
                    </div>

                    {/* Medications */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Medications
                            (comma-separated)</label>
                        <input
                            type="text"
                            value={medications}
                            onChange={(e) => setMedications(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                        />
                    </div>

                    {/* Next Checkup Date & Doctor Notes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Next Checkup Date</label>
                            <input
                                type="date"
                                value={nextCheckup}
                                onChange={(e) => setNextCheckup(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Doctor's Notes</label>
                            <textarea
                                value={doctorNotes}
                                onChange={(e) => setDoctorNotes(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                    </div>

                    {/* Maritime Fitness Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Maritime Fitness Status</label>
                        <select
                            value={maritimeFitnessStatus}
                            onChange={(e) => setMaritimeFitnessStatus(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            required
                        >
                            <option value="Fit">Fit</option>
                            <option value="Temporarily Unfit">Temporarily Unfit</option>
                            <option value="Permanently Unfit">Permanently Unfit</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setShowAddModal(false)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Save Record
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddRecordForm;
