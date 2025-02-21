import React, { useState } from 'react';
import {AppDispatch} from "../../store/store.tsx";
import {useDispatch} from "react-redux";
import {getAllPatient, updatePatient} from "../../redux/PatientSlice.ts";
import {Patient} from "../../model/types.ts";

const EditPatientForm = ({ setShowEditModal,patient }) => {
    const [id, setId] = useState(patient?.id || "");
    const [name, setName] = useState(patient?.name || "");
    const [dateOfBirth, setDateOfBirth] = useState(patient?.dateOfBirth || "");
    const [nationality, setNationality] = useState(patient?.nationality || "");
    const [seamanBookNumber, setSeamanBookNumber] = useState(patient?.seamanBookNumber || "");
    const [vesselName, setVesselName] = useState(patient?.vesselName || "");
    const [company, setCompany] = useState(patient?.company || "");

    const dispatch = useDispatch<AppDispatch>();

    async function handleSubmit  (e:React.FormEvent)  {
        e.preventDefault();
        const patientData :Patient = {
            id,
            name,
            dateOfBirth,
            nationality,
            seamanBookNumber,
            vesselName,
            company,
        };

        // Log or edit patient data here
        console.log('Patient data:', patientData);


        //update Patient data
        await dispatch(updatePatient(patientData));
        dispatch(getAllPatient());

        // Close modal
        setShowEditModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit Patient Details</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Id</label>
                            <input
                                type="text"
                                value={id}
                                placeholder="Auto generate id"
                                readOnly={true}
                                onChange={(e) => setId(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nationality</label>
                            <input
                                type="text"
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Seaman Book Number</label>
                            <input
                                type="text"
                                value={seamanBookNumber}
                                onChange={(e) => setSeamanBookNumber(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Vessel Name</label>
                            <input
                                type="text"
                                value={vesselName}
                                onChange={(e) => setVesselName(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Company</label>
                            <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setShowEditModal(false)}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Save Patient
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default EditPatientForm;
