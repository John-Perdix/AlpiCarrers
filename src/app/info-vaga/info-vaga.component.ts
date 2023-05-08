import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

/* Serviço */
import { EmpregosService } from '../empregos.service';
import { Emprego } from '../empregos.service';

/* FontAwesome Icons */
import { faMoneyBillWave, faLocationDot, faHouseLaptop, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-vaga',
  templateUrl: './info-vaga.component.html',
  styleUrls: ['./info-vaga.component.css']
})
export class InfoVagaComponent {

  ngOnInit(): void {
    this.getEmprego();
    /* this.filteredData = [...this.listOfData]; */
    console.log(this.listOfData);
    this.empregosService.generateRandomEmpregos();
    this.data_vaga = history.state.data;
  }

  data_vaga: any;

    /* FontAwesome Icons */
    faMoneyBillWave = faMoneyBillWave;
    faLocationDot = faLocationDot;
    faAddressBook = faAddressBook;
    faHouseLaptop = faHouseLaptop;
    faBriefcase=faBriefcase;

  color= '#E4997F';

  getEmprego(): void {
    this.listOfData = this.empregosService.getEmprego();
  }

  listOfData: Emprego[] = [];

  constructor(private route: ActivatedRoute, private empregosService: EmpregosService, private router: Router) { }

  /* Função para passar a data para a candidatura */
  navigateToCandidatura(data: any) {
    this.router.navigate(['/candidatura'], { state: { data: data } });
  }
}
