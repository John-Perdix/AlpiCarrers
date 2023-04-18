import { Component, OnInit } from '@angular/core';

/* Serviço */
import { EmpregosService } from '../empregos.service';
import { Emprego } from '../empregos.service';

/* FontAwesome Icons */
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

/* Button size module de ng-zorro */
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit{

  ngOnInit(): void {
    this.getEmprego();
  }

  getEmprego(): void {
    this.listOfData = this.empregosService.getEmprego();
  }

  listOfData: Emprego[] = [];

  constructor(private empregosService: EmpregosService) {}

    /* FontAwesome Icons */
    faMoneyBillWave = faMoneyBillWave;

    color= '#E4997F';
  
    size: NzButtonSize = 'large';
}
