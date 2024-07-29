import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface EstadoCivil {
  value: number;
  display: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  personalForm: FormGroup;
  estadoCivilList: EstadoCivil[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.personalForm = this.fb.group({
      nombres: ['', [Validators.required, this.noTrailingSpacesValidator]],
      apellidos: ['', [Validators.required, this.noTrailingSpacesValidator]],
      fumas: [false, Validators.required],
      lectura: [false, Validators.required],
      libros: this.fb.array([]),
      estadoCivil: ['']
    });
  }

  ngOnInit(): void {
    this.fetchEstadoCivil();
  }

  get nombres(): AbstractControl {
    return this.personalForm.get('nombres')!;
  }

  get apellidos(): AbstractControl {
    return this.personalForm.get('apellidos')!;
  }

  get libros(): FormArray {
    return this.personalForm.get('libros') as FormArray;
  }

  addLibro(): void {
    this.libros.push(this.fb.control(''));
  }

  removeLibro(index: number): void {
    this.libros.removeAt(index);
  }

  toggleLibrosField(): void {
    if (this.personalForm.get('lectura')?.value) {
      this.libros.enable();
    } else {
      this.libros.disable();
      this.libros.clear();
    }
  }

  noTrailingSpacesValidator(control: AbstractControl): { [key: string]: any } | null {
    const isValid = control.value?.trim().length === control.value?.length;
    return isValid ? null : { trailingSpaces: true };
  }

  getErrorMessage(control: AbstractControl, fieldName: string): string {
    if (control.hasError('required')) {
      return `${fieldName} es obligatorio.`;
    }
    if (control.hasError('trailingSpaces')) {
      return `${fieldName} no debe contener espacios al final.`;
    }
    return '';
  }

  fetchEstadoCivil(): void {
    this.http.post('http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil', {})
      .subscribe((response: any) => {
        if (response && response.result) {
          this.estadoCivilList = response.result.map((estado: any) => ({
            value: estado.id,
            display: estado.nombre
          }));
        }
      }, error => {
        console.error('Error al obtener el catálogo de estado civil', error);
      });
  }

  onSubmit(): void {
    if (this.personalForm.valid) {
      alert('Formulario enviado con éxito.');
      console.log('Formulario enviado:', this.personalForm.value);
      // Limpia el formulario después del envío
      this.personalForm.reset();
    } else {
      alert('Error: El formulario no es válido.');
    }
  }
}
