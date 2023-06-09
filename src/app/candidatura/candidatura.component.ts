import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

;

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
    this.data_vaga = history.state.data;
  }

  data_vaga: any;


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
  showError = false;
  showForm = true;
  formSubmitted = false;
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      // Set flag to show success message
      this.showForm = false; //hide form
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
          console.log('Form not submitted - ERROR');
        }
      });
    }
    console.log('submit', this.validateForm.value);
  }


  constructor(private route: ActivatedRoute, private fb: UntypedFormBuilder, private empregosService: EmpregosService) {
    this.validateForm = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.email, Validators.required]],
      tlm: [null, [Validators.required]],
      situacao: [null, [Validators.required]],
      morada:[null, [Validators.required]],
      codigoPostal1:[null, [Validators.required]],
      codigoPostal2:[null, [Validators.required]],
      concelho:[null, [Validators.required]],
      localidade:[null, [Validators.required]],
      distrito:[null, [Validators.required]],
      escolaridade:[null, [Validators.required]],
      formacao:[null, [Validators.required]],
      curriculo:[null, [this.fileValidator]],
      emprego: [null, [Validators.required]]
    });
    
  }


  /* UPLOAD FILE */

  fileValidator(control: AbstractControl): ValidationErrors | null {
    const file = control.value;
    if (!file || !(file instanceof File)) {
      return { invalidFile: true };
    }
    return null;
  }

  fileList: NzUploadFile[] = [];

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
