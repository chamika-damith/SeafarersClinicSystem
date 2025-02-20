export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  seamanBookNumber: string;
  vesselName?: string;
  company?: string;
}

export interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  treatment: string;
  medications: string;
  nextCheckup?: string;
  doctorNotes: string;
  maritimeFitnessStatus:string;
  appointment: Appointment;
}

export interface Appointment {
  id: string;
  patient: Patient;
  date: string;
  time: string;
  appointmentType :'REGULAR_CHECKUP' | 'MARITIME_FITNESS_ASSESSMENT' | 'EMERGENCY' | 'FOLLOW_UP';
  appointmentStatus: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
}