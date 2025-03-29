import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Appointment, Patient} from "../model/types.ts";

const initialState: Appointment[] = [];

const api = axios.create({
    baseURL: "https://seafarersclinicsystemnodejsbackend.onrender.com/appointment",
});

export const saveAppointment = createAsyncThunk(
    "appointment/saveAppointment",
    async (a: Appointment) => {
        try {
            console.log(a)
            const response = await api.post("/add", a);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const getAllAppointment = createAsyncThunk(
    "appointment/getAllAppointment",
    async () => {
        try {
            const response = await api.get("/get");
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const deleteAppointment = createAsyncThunk(
    "appointment/deleteAppointment",
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

export const updateAppointment = createAsyncThunk(
    "appointment/updateAppointment",
    async (a: Appointment) => {
        try {
            const response = await api.put("/update", a);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const getAppointment = createAsyncThunk(
    "appointment/getAppointment",
    async (id: string) => {
        try {
            const response = await api.get(`/${id}`);
            console.log(response.data)
            return response.data as Patient;
        } catch (err) {
            console.error("Error fetching appointment:", err);
            throw err;
        }
    }
);

const AppointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Appointment
            .addCase(saveAppointment.pending, () => {
                console.log("Pending save Appointment");
            })
            .addCase(saveAppointment.fulfilled, (state, action) => {
                console.log("Appointment save fulfilled");
                state.push(action.payload);
            })
            .addCase(saveAppointment.rejected, () => {
                console.log("Appointment save rejected");
            })

            // Get All Appointment
            .addCase(getAllAppointment.pending, () => {
                console.log("Pending get all Appointments");
            })
            .addCase(getAllAppointment.fulfilled, (state, action) => {
                console.log("Get all Appointments fulfilled");
                return action.payload;
            })
            .addCase(getAllAppointment.rejected, () => {
                console.log("Get all Appointments rejected");
            })

            // Delete Appointment
            .addCase(deleteAppointment.pending, () => {
                console.log("Pending delete Appointment");
            })
            .addCase(deleteAppointment.fulfilled, (state, action) => {
                console.log("Delete Appointments fulfilled");
                return state.filter((appointment) => appointment.id !== action.payload.id);
            })
            .addCase(deleteAppointment.rejected, () => {
                console.log("Delete Appointment rejected");
            })

            // Update Patient
            .addCase(updateAppointment.pending, () => {
                console.log("Pending update Appointment");
            })
            .addCase(updateAppointment.fulfilled, (state, action) => {
                console.log("Update Appointment fulfilled");
                const index = state.findIndex(
                    (appointment) => appointment.id === action.payload.id
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateAppointment.rejected, () => {
                console.log("Update Appointment rejected");
            })
            //get appointment
            .addCase(getAppointment.fulfilled, (_, action) => {
                console.log("Appointment data fetched successfully:", action.payload);
            })
            .addCase(getAppointment.rejected, (_, action) => {
                console.error("Fetching Appointment failed:", action.payload);
            });

    },
});

export default AppointmentSlice.reducer;
