import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-calculator',
  templateUrl: './date-calculator.component.html',
  styleUrls: ['./date-calculator.component.scss']
})
export class DateCalculatorComponent {
  dateForm: FormGroup;
  result: Date | null = null;

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      selectedDate: ['', Validators.required],
      unit: ['days', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]]
    });
  }

  calculateDate(): void {
    if (this.dateForm.valid) {
      const { selectedDate, unit, amount } = this.dateForm.value;
      const date = new Date(selectedDate);
      const quantity = parseInt(amount, 10);

      switch (unit) {
        case 'days':
          // Agrega la cantidad de días y ajusta automáticamente la fecha
          date.setDate(date.getDate() + quantity + 1);
          break;
        case 'months':
          // Sumar meses con ajuste
          const initialMonth = date.getMonth();
          date.setMonth(initialMonth + quantity);
          // Asegura que el día del mes no cambie inesperadamente
          if (date.getMonth() !== (initialMonth + quantity) % 12) {
            date.setDate(0);
          }
          break;
        case 'years':
          // Sumar años directamente
          date.setFullYear(date.getFullYear() + quantity);
          break;
      }

      this.result = date;
    }
  }
}
