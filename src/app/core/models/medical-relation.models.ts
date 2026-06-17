export type ConsentStatus = 'pendente' | 'ativo' | 'recusado' | 'revogado' | 'expirado';
export type AppointmentStatus = 'agendada' | 'confirmada' | 'realizada' | 'cancelada';

export interface DoctorProfile {
  id: string;
  fullName: string;
  crm: string;          // validado contra o conselho
  specialty: string;
  verified: boolean;
}

export interface AccessRequest {
  id: string;
  doctor: DoctorProfile;
  scope: string[];                 // ['doencas', 'medicamentos', ...]
  requestedAt: string;             // ISO
  expiresAt: string;               // janela de acesso
  status: ConsentStatus;
}

export interface Appointment {
  id: string;
  doctor: DoctorProfile;
  scheduledAt: string;             // ISO datetime
  status: AppointmentStatus;
  reason?: string;
}
