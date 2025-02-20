import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {Patient} from "../model/types.ts";

const initialState: Patient[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/patient",
});

export const savePatient = createAsyncThunk(
    "patient/savePatient",
    async (p: Patient) => {
        try {
            const response = await api.post("/add", p);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const getAllPatient = createAsyncThunk(
    "patient/getAllPatient",
    async () => {
        try {
            const response = await api.get("/get");
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const deletePatient = createAsyncThunk(
    "patient/deletePatient",
    async (code: string) => {
        try {
            const response = await api.delete(`/delete/${code}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);
export const getPatient = createAsyncThunk(
    "patient/getPatient",
    async (patientId: string) => {
        try {
            const response = await api.get(`/${patientId}`);
            console.log(response.data)
            return response.data as Patient;
        } catch (err) {
            console.error("Error fetching patient:", err);
            throw err;
        }
    }
);
export const updatePatient = createAsyncThunk(
    "patient/updatePatient",
    async (p: Patient) => {
        try {
            const response = await api.put("/update", p);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const PatientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Patient
            .addCase(savePatient.pending, () => {
                console.log("Pending save patient");
            })
            .addCase(savePatient.fulfilled, (state, action) => {
                console.log("Patient save fulfilled");
                state.push(action.payload);
            })
            .addCase(savePatient.rejected, () => {
                console.log("Patient save rejected");
            })

            // Get All Patients
            .addCase(getAllPatient.pending, () => {
                console.log("Pending get all patients");
            })
            .addCase(getAllPatient.fulfilled, (state, action) => {
                console.log("Get all patients fulfilled");
                return action.payload;
            })
            .addCase(getAllPatient.rejected, () => {
                console.log("Get all patients rejected");
            })

            // Delete Patient
            .addCase(deletePatient.pending, () => {
                console.log("Pending delete patient");
            })
            .addCase(deletePatient.fulfilled, (state, action) => {
                console.log("Delete patient fulfilled");
                return state.filter((patient) => patient.id !== action.payload.patientCode);
            })
            .addCase(deletePatient.rejected, () => {
                console.log("Delete patient rejected");
            })

            // Update Patient
            .addCase(updatePatient.pending, () => {
                console.log("Pending update patient");
            })
            .addCase(updatePatient.fulfilled, (state, action) => {
                console.log("Update patient fulfilled");
                const index = state.findIndex(
                    (patient) => patient.id === action.payload.patientCode
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updatePatient.rejected, () => {
                console.log("Update patient rejected");
            })
            // Get Patient
            .addCase(getPatient.fulfilled, (_, action) => {
                console.log("Patient data fetched successfully:", action.payload);
            })
            .addCase(getPatient.rejected, (_, action) => {
                console.error("Fetching patient failed:", action.payload);
            });
    },
});

export default PatientSlice.reducer;
