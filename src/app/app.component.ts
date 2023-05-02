import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EmpregosService } from './empregos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alpiCarrers';

  validateForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
    });
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  constructor(private fb: UntypedFormBuilder, private router: Router, private empregosService: EmpregosService ) {}

  searchEmprego2!: string;
  searchEmpregos() {
    this.empregosService['setSearchTerm'](this.searchEmprego2);
    this.router.navigate(['/vagas']);
  }
}
