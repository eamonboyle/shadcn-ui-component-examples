export interface HealthProfile {
    id: string;
    name: string;
    age: string;
    dateOfBirth: string;
    height: string;
    weight: string;
    hmoPlan: string;
    expiresOn: string;
    status: string;
    avatar: string;
}

export interface Consultation {
    id?: number;
    date: string;
    time: string;
    hospital: string;
    doctor: string;
    specialization: string;
    patientName?: string;
    diagnosis?: string;
    lastConversation?: string;
    subject?: string;
}
