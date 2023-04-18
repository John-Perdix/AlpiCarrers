import { Component, OnInit } from '@angular/core';
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
   

  
  validateForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.getEmprego();
  }

  getEmprego(): void {
    this.listOfData = this.empregosService.getEmprego();
  }

  listOfData: Emprego[] = [];

  constructor(private empregosService: EmpregosService) {}

  /* search-module var */
  searchEmprego: any;


  /* FontAwesome Icons */
  faMoneyBillWave = faMoneyBillWave;

  color= '#E4997F';

  size: NzButtonSize = 'large';

  
}
