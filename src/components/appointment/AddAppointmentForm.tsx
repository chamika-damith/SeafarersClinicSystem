import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.tsx";
import { Appointment } from "../../model/types.ts";
import {getAllAppointment, saveAppointment} from "../../redux/AppointmentSlice.ts";
import {getAllPatient, getPatient} from "../../redux/PatientSlice.ts";
import {generateId} from "@/components/generateId.tsx";

const AddAppointmentForm = ({ setShowAddModal }) => {
    const [id, setId] = useState("");
    const [pId, setPatientId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [appointmentType, setAppointmentType] = useState<Appointment["appointmentType"]>("REGULAR_CHECKUP");
    const [appointmentStatus, setAppointmentStatus] = useState<Appointment["appointmentStatus"]>("SCHEDULED");
    const [notes, setNotes] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllPatient());
    }, [dispatch]);

    const patients = useSelector((state: RootState) => state.patient);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const patientId = await dispatch(getPatient(pId)).unwrap();

        const appointmentData: Appointment = {
            id:generateId('appointment'),
            patientId,
            date,
            time,
            appointmentType,
            appointmentStatus,
            notes
        };

        console.log("Appointment data:", appointmentData);

        // Save appointment data
        await dispatch(saveAppointment(appointmentData));
        dispatch(getAllAppointment());

        // Close modal
        setShowAddModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Schedule New Appointment</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Appointment ID */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Appointment ID</label>
                            <input
                                type="text"
                                placeholder="Auto Generate Appointment ID"
                                value={id}
                                readOnly={true}
                                onChange={(e) => setId(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Patient Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Select Patient</label>
                            <div className="relative">
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                <select
                                    id="allocatedStaff"
                                    value={pId}
                                    onChange={(e) => setPatientId(e.target.value)}
                                    required
                                    className="pl-10 mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value="">Select Patient</option>
                                    {patients.map((patient) => (
                                        <option key={patient.id} value={patient.id}>
                                            {patient.name} ({patient.id})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Appointment Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Appointment Type</label>
                            <select
                                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={appointmentType}
                                onChange={(e) => setAppointmentType(e.target.value as Appointment["appointmentType"])}
                            >
                                <option value="MARITIME_FITNESS_ASSESSMENT">MARITIME FITNESS ASSESSMENT</option>
                                <option value="REGULAR_CHECKUP">REGULAR CHECKUP</option>
                                <option value="FOLLOW_UP">FOLLOW UP</option>
                                <option value="EMERGENCY">EMERGENCY</option>
                            </select>
                        </div>

                        {/* Date Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        {/* Time Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Time</label>
                            <input
                                type="time"
                                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                        <textarea
                            rows={3}
                            placeholder="Add any additional notes..."
                            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => setShowAddModal(false)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                        >
                            Schedule Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddAppointmentForm;