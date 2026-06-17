import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginCredentials {
  cpf: string;        // só dígitos, sem máscara
  password: string;
}

export interface RegisterData {
  fullName: string;
  cpf: string;        // só dígitos
  birthDate: string;  // ISO yyyy-mm-dd
  email: string;
  phone: string;      // só dígitos
  password: string;
  consent: boolean;
}

export interface AuthSession {
  token: string;
  patientId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  private readonly _session = signal<AuthSession | null>(null);
  readonly session = this._session.asReadonly();
  readonly isAuthenticated = computed(() => this._session() !== null);

  login(credentials: LoginCredentials): Observable<AuthSession> {
    return this.http
      .post<AuthSession>('/api/auth/login', credentials)
      .pipe(tap((session) => this._session.set(session)));
  }

  register(data: RegisterData): Observable<AuthSession> {
    return this.http
      .post<AuthSession>('/api/auth/register', data)
      .pipe(tap((session) => this._session.set(session)));
  }

  // dentro da classe AuthService, junto de login/register:
  requestPasswordReset(cpf: string): Observable<void> {
    return this.http.post<void>('/api/auth/password-reset', { cpf });
  }

}
