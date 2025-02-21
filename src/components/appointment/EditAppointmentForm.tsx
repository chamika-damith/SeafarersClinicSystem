import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store.tsx";
import { Appointment } from "../../model/types.ts";
import {getAllAppointment, updateAppointment} from "../../redux/AppointmentSlice.ts";
import {getAllPatient, getPatient} from "../../redux/PatientSlice.ts";
import {Dialog} from "@/components/ui/dialog.tsx";

const AddAppointmentForm = ({showEditModal, setShowEditModal , appointment}) => {
    const [id, setId] = useState(appointment?.id||"");
    const [pId, setPatientId] = useState(appointment?.patientId||"");
    const [date, setDate] = useState(appointment?.date||"");
    const [time, setTime] = useState(appointment?.time||"");
    const [appointmentType, setAppointmentType] = useState<Appointment["appointmentType"]>(appointment?.appointmentType||"REGULAR_CHECKUP");
    const [appointmentStatus, setAppointmentStatus] = useState<Appointment["appointmentStatus"]>(appointment?.appointmentStatus||"SCHEDULED");
    const [notes, setNotes] = useState(appointment?.notes||"");

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllPatient());
    }, [dispatch]);

    const patients = useSelector((state: RootState) => state.patient);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const patientId = await dispatch(getPatient(pId)).unwrap();

        const appointmentData: Appointment = {
            id,
            patientId,
            date,
            time,
            appointmentType,
            appointmentStatus,
            notes
        };

        console.log("Appointment data:", appointmentData);

        // Update appointment data
        await dispatch(updateAppointment(appointmentData));
        dispatch(getAllAppointment());

        // Close modal
        setShowEditModal(false);
    };

    return (
        <Dialog open={showEditModal} onOpenChange={(open) => {
            if (!open) {
                setShowEditModal(false)
            }
        }}>
            <div>
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Appointment</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Appointment ID */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Appointment ID</label>
                                    <input
                                        type="text"
                                        placeholder="Auto Generate Appointment ID"
                                        readOnly={true}
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 shadow-sm"
                                    />
                                </div>

                                {/* Patient Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Patient</label>
                                    <div className="relative">
                                        <Search
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"/>
                                        <select
                                            id="allocatedStaff"
                                            value={pId}
                                            onChange={(e) => setPatientId(e.target.value)}
                                            required
                                            className="pl-10 mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 shadow-sm"
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
                                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 shadow-sm"
                                        value={appointmentType}
                                        onChange={(e) => setAppointmentType(e.target.value)}
                                    >
                                        <option value="MARITIME_FITNESS_ASSESSMENT">Maritime Fitness Assessment</option>
                                        <option value="REGULAR_CHECKUP">Regular Checkup</option>
                                        <option value="FOLLOW_UP">Follow Up</option>
                                        <option value="EMERGENCY">Emergency</option>
                                    </select>
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Date</label>
                                    <input
                                        type="date"
                                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 shadow-sm"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Time</label>
                                    <input
                                        type="time"
                                        className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 shadow-sm"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Notes */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Notes</label>
                                <textarea
                                    rows={3}
                                    className="mt-1 block w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 shadow-sm"
                                    placeholder="Add any additional notes..."
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowEditModal(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    Save Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </Dialog>
    );
};

export default AddAppointmentForm;