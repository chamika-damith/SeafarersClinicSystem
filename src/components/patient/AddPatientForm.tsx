import React, { useState } from 'react';
import {AppDispatch} from "../../store/store.tsx";
import {useDispatch} from "react-redux";
import {savePatient} from "../../redux/PatientSlice.ts";
import {Patient} from "../../model/types.ts";
import {generateId} from "@/components/generateId.tsx";

const AddPatientForm = ({ setShowAddModal }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [nationality, setNationality] = useState("");
    const [seamanBookNumber, setSeamanBookNumber] = useState("");
    const [vesselName, setVesselName] = useState("");
    const [company, setCompany] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        const patientData :Patient = {
            id:generateId('patient'),
            name,
            dateOfBirth,
            nationality,
            seamanBookNumber,
            vesselName,
            company,
        };

        // Log or save patient data here
        console.log('Patient data:', patientData);


        //save Patient data
        dispatch(savePatient(patientData));

        // Close modal
        setShowAddModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Patient</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Id</label>
                            <input
                                type="text"
                                value={id}
                                readOnly={true}
                                placeholder="auto generated id"
                                onChange={(e) => setId(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
                            <input
                                type="date"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Nationality</label>
                            <input
                                type="text"
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Seaman Book Number</label>
                            <input
                                type="text"
                                value={seamanBookNumber}
                                onChange={(e) => setSeamanBookNumber(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Vessel Name</label>
                            <input
                                type="text"
                                value={vesselName}
                                onChange={(e) => setVesselName(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Company</label>
                            <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setShowAddModal(false)}
                            className="px-5 py-2 border rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Save Patient
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddPatientForm;
