import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {MedicalRecord, Patient} from "../model/types.ts";

const initialState: MedicalRecord[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/medicalRecord",
});

export const saveMedicalRecord = createAsyncThunk(
    "medicalRecord/saveMedicalRecord",
    async (a: MedicalRecord) => {
        try {
            console.log(a)
            const response = await api.post("/add", a);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const getAllMedicalRecord = createAsyncThunk(
    "medicalRecord/getAllMedicalRecord",
    async () => {
        try {
            const response = await api.get("/get");
            console.log(response);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const deleteMedicalRecord = createAsyncThunk(
    "medicalRecord/deleteMedicalRecord",
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

export const updateMedicalRecord = createAsyncThunk(
    "medicalRecord/updateMedicalRecord",
    async (a: MedicalRecord) => {
        try {
            const response = await api.put("/update", a);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);
export const getMedicalRecord = createAsyncThunk(
    "medicalRecord/getMedicalRecord",
    async (id: string) => {
        try {
            const response = await api.get(`/${id}`);
            console.log(response.data)
            return response.data as Patient;
        } catch (err) {
            console.error("Error fetching medicalRecord:", err);
            throw err;
        }
    }
);



const MedicalRecordSlice = createSlice({
    name: "medicalRecord",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save medicalRecord
            .addCase(saveMedicalRecord.pending, () => {
                console.log("Pending save medicalRecord");
            })
            .addCase(saveMedicalRecord.fulfilled, (state, action) => {
                console.log("medicalRecord save fulfilled");
                state.push(action.payload);
            })
            .addCase(saveMedicalRecord.rejected, () => {
                console.log("medicalRecord save rejected");
            })

            // Get All medicalRecord
            .addCase(getAllMedicalRecord.pending, () => {
                console.log("Pending get all medicalRecord");
            })
            .addCase(getAllMedicalRecord.fulfilled, (state, action) => {
                console.log("Get all medicalRecord fulfilled");
                return action.payload;
            })
            .addCase(getAllMedicalRecord.rejected, () => {
                console.log("Get all medicalRecord rejected");
            })

            // Delete medicalRecord
            .addCase(deleteMedicalRecord.pending, () => {
                console.log("Pending delete medicalRecord");
            })
            .addCase(deleteMedicalRecord.fulfilled, (state, action) => {
                console.log("Delete medicalRecord fulfilled");
                return state.filter((appointment) => appointment.id !== action.payload.id);
            })
            .addCase(deleteMedicalRecord.rejected, () => {
                console.log("Delete medicalRecord rejected");
            })

            // Update medicalRecord
            .addCase(updateMedicalRecord.pending, () => {
                console.log("Pending update medicalRecord");
            })
            .addCase(updateMedicalRecord.fulfilled, (state, action) => {
                console.log("Update medicalRecord fulfilled");
                const index = state.findIndex(
                    (appointment) => appointment.id === action.payload.id
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateMedicalRecord.rejected, () => {
                console.log("Update medicalRecord rejected");
            });

    },
});

export default MedicalRecordSlice.reducer;
