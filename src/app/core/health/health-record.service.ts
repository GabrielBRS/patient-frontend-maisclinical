import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Condition } from '../models/health-record.models';

@Injectable({ providedIn: 'root' })
export class HealthRecordService {
  private readonly http = inject(HttpClient);
  private readonly base = '/api/health';

  listConditions(): Observable<Condition[]> {
    return this.http.get<Condition[]>(`${this.base}/conditions`);
  }

  createCondition(data: Omit<Condition, 'id'>): Observable<Condition> {
    return this.http.post<Condition>(`${this.base}/conditions`, data);
  }

  deleteCondition(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/conditions/${id}`);
  }
}
