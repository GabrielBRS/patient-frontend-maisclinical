export type Severity = 'leve' | 'moderada' | 'grave';
export type ConditionStatus = 'ativa' | 'em-tratamento' | 'resolvida';

// FHIR: Condition
export interface Condition {
  id: string;
  name: string;
  icd10?: string;            // CID-10, ex.: 'I10'
  status: ConditionStatus;
  onsetDate?: string;        // ISO yyyy-mm-dd
  notes?: string;
}

// FHIR: AllergyIntolerance
export interface Allergy {
  id: string;
  substance: string;
  reaction?: string;
  severity: Severity;
  notes?: string;
}

// FHIR: MedicationStatement
export interface Medication {
  id: string;
  name: string;
  dose?: string;             // '500mg'
  frequency?: string;        // '2x ao dia'
  startDate?: string;
  active: boolean;
  notes?: string;
}

// FHIR: Procedure
export interface Procedure {
  id: string;
  name: string;
  date?: string;
  notes?: string;
}

// FHIR: FamilyMemberHistory
export interface FamilyHistory {
  id: string;
  relative: string;          // 'mãe', 'pai', 'irmão'
  condition: string;
  icd10?: string;
  notes?: string;
}

// FHIR: DocumentReference
export interface HealthReport {
  id: string;
  title: string;
  type: 'exame' | 'laudo' | 'receita' | 'outro';
  date?: string;
  fileName?: string;
  notes?: string;
}
