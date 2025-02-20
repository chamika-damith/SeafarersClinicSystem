import { configureStore } from "@reduxjs/toolkit";
import PatientSlice from "../redux/PatientSlice.ts";
import AppoinmentSlice from "../redux/AppointmentSlice.ts";
import MedicalRecordSlice from "@/redux/MedicalRecordSlice.ts";

export const store = configureStore({
    reducer: {
        patient:PatientSlice,
        appointment:AppoinmentSlice,
        medicalRecord:MedicalRecordSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
