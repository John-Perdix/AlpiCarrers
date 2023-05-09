import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

/* Serviço */
import { EmpregosService } from '../empregos.service';
import { Emprego } from '../empregos.service';

/* FontAwesome Icons */
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

/* Button size module de ng-zorro */
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {
  pageSize = 3;
  currentPage = 1;

  navigateToCandidatura(data: any) {
    this.router.navigate(['/candidatura'], { state: { data: data } });
  }
  
  validateForm!: UntypedFormGroup;
  firstThreeEmpregos: Emprego[] = [];
  listOfData: Emprego[] = [];

  ngOnInit(): void {
    this.getEmprego();
    this.getEmpregoSlice();
  }

  getEmprego(): void {
    this.listOfData = this.empregosService.getEmprego();
  }

  getEmpregoSlice(): void {
    this.firstThreeEmpregos = this.empregosService.getEmpregoSlice();
  }

  constructor(private empregosService: EmpregosService, private router: Router, private elementRef: ElementRef){}

  /* search-module var */
  searchEmprego: any;


  /* FontAwesome Icons */
  faMoneyBillWave = faMoneyBillWave;

  color= '#E4997F';

  size: NzButtonSize = 'large';

  
}
