import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

/* Serviço */
import { EmpregosService } from '../empregos.service';
import { Emprego } from '../empregos.service';

/* FontAwesome Icons */
import { faMoneyBillWave, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-candidatura',
  templateUrl: './candidatura.component.html',
  styleUrls: ['./candidatura.component.css']
})

export class CandidaturaComponent implements OnInit {
  ngOnInit(): void {
    this.getEmprego();
    this.empregosService.generateRandomEmpregos();
  }

  validateForm: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  /* fontawesome icons */
  faLocationDot = faLocationDot;

  /* Get Array listOfData */
  getEmprego(): void {
    this.listOfData = this.empregosService.getEmprego();
  }
  listOfData: Emprego[] = [];

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
  
  locais = this.empregosService.locais;
  inputValue = '';

  /* Autocomplete de locais */
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.locais = value ? [value, value + value, value + value + value] : [];
  }

  showSuccess = false;
  formSubmitted = false;
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      // Set flag to show success message
      this.showSuccess = true;
      // Reset form
      this.validateForm.reset();
      //update the variable to not show the form after sucsess
      this.formSubmitted = true;
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
        return;
      });
    }
    console.log('submit', this.validateForm.value);
  }


  constructor(private fb: UntypedFormBuilder, private empregosService: EmpregosService) {
    this.validateForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      tlm: [null, [Validators.required]],
      situacao: [null, [Validators.required]],
      local: [null, [Validators.required]],
      morada:[null, [Validators.required]],
      codigoPostal:[null, [Validators.required]],
      concelho:[null, [Validators.required]],
      localidade:[null, [Validators.required]],
      distrito:[null, [Validators.required]],
      escolaridade:[null, [Validators.required]],
      formacao:[null, [Validators.required]],
      curriculo:[null, [Validators.required]],
    });
    
  }


  /* UPLOAD FILE */

  fileList: NzUploadFile[] = [

  ];

  handleChange(info: NzUploadChangeParam): void {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.fileList = fileList;
  }

  onlyNumbers(inputElement: HTMLInputElement): void {
    inputElement.value = inputElement.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }

  addSpace() {
    let input = document.getElementById("codigoPostal") as HTMLInputElement;
    console.log('addSpace called');
  
    input.onkeydown = function () {
        if (input.value.length > 0) {
            if (input.value.length % 4 === 0) {
              console.log('trigger');
                input.value += "-";
            }
        }
    };
  }
}
