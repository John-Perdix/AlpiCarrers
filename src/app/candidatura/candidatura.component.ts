import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-candidatura',
  templateUrl: './candidatura.component.html',
  styleUrls: ['./candidatura.component.css']
})

export class CandidaturaComponent {
  validateForm: UntypedFormGroup;

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  /* 
  Dados pessoais:
  Nome
  email
  numero tlm
  Situação de emprego
  cidade em que reside

  curriculo
  portfolio optional
  Os skills mais importantes

  job info
  */

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    console.log('submit', this.validateForm.value);
  }


  constructor(private fb: UntypedFormBuilder) {
    this.validateForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      tlm: ['', [Validators.required]],
      /*comment: ['', [Validators.required]], */
    });
  }
}
