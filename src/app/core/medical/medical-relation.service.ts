import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessRequest, Appointment } from '../models/medical-relation.models';

@Injectable({ providedIn: 'root' })
export class MedicalRelationService {
  private readonly http = inject(HttpClient);
  private readonly base = '/api/medical';

  // --- Autorizações ---
  listAccessRequests(): Observable<AccessRequest[]> {
    return this.http.get<AccessRequest[]>(`${this.base}/access-requests`);
  }
  respondAccess(id: string, accept: boolean): Observable<AccessRequest> {
    return this.http.patch<AccessRequest>(`${this.base}/access-requests/${id}`, { accept });
  }
  revokeAccess(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/access-requests/${id}`);
  }

  // --- Consultas ---
  listAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.base}/appointments`);
  }
}
