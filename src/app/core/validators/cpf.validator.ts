import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const raw = String(control.value ?? '').replace(/\D/g, '');
    if (!raw) return null;                       // 'required' cuida do vazio
    if (raw.length !== 11 || /^(\d)\1{10}$/.test(raw)) return { cpf: true };

    const checkDigit = (length: number): number => {
      let sum = 0;
      for (let i = 0; i < length; i++) {
        sum += Number(raw[i]) * (length + 1 - i);
      }
      const mod = (sum * 10) % 11;
      return mod === 10 ? 0 : mod;
    };

    const valid = checkDigit(9) === Number(raw[9]) && checkDigit(10) === Number(raw[10]);
    return valid ? null : { cpf: true };
  };
}
