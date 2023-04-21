import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

/* Serviço */
import { EmpregosService } from '../empregos.service';
import { Emprego } from '../empregos.service';

/* FontAwesome Icons */
import { faMoneyBillWave, faLocationDot } from '@fortawesome/free-solid-svg-icons';

/* Button size module de ng-zorro */
import { NzButtonSize } from 'ng-zorro-antd/button';

/* Marks for slider module de ng-zorro */
import { NzMarks } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  ngOnInit(): void {
    this.getEmprego();
    this.filteredData = [...this.listOfData];
    console.log(this.listOfData);
    this.empregosService.generateRandomEmpregos();
  }

  /* Autocomplete de locais */
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.locais = value ? [value, value + value, value + value + value] : [];
  }
  locais = this.empregosService.locais;

  getEmprego(): void {
    this.listOfData = this.empregosService.getEmprego();
  }


  listOfData: Emprego[] = [];

  constructor(private empregosService: EmpregosService) { }

  /* FontAwesome Icons */
  faMoneyBillWave = faMoneyBillWave;
  faLocationDot = faLocationDot;

  /* paginatio variables */
  pageSize = 5;
  currentPage = 1;

  options = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
  ];

  color = '#E4997F';

  size: NzButtonSize = 'large';

  checked = true;
  unchecked = false;

  /* slider do salário */
  value_max = this.empregosService.value_max;
  value_min = this.empregosService.value_min;
  value = [this.value_max, this.value_min];

  marks: NzMarks = {
    [this.value_min]: `${this.value_min}` + '€',
    [this.value_max]: {
      style: {
        color: '#D85F35'
      },
      label: '<strong>' + `${this.value_max}` + '€</strong>'
    }
  };

  /* Data filtering arrays */

  /* Checkbox politica */
  allChecked = false;
  indeterminate = true;
  checkOptionsOne = [
    { label: 'Hibrido', value: 'hibrido', checked: false },
    { label: 'Remoto', value: 'remoto', checked: false },
    { label: 'Presencial', value: 'presencial', checked: false }
  ];

  /* checkOptionsTwo = [
    { label: 'IT', value: 'IT', checked: false },
    { label: 'Design Gráfico', value: 'Design Grafico', checked: false },
    { label: 'Web Design', value: 'Web Design', checked: false },
    { label: 'Animação 3D', value: 'Animação 3D', checked: false },
    { label: 'Animação 2D', value: 'Animação 2D', checked: false },
    { label: 'Ilustração', value: 'Ilustração', checked: false },
    { label: 'Design Editorial', value: 'Design Editorial', checked: false }
  ]; */

  checkOptionsTwo = [
    { label: 'Desenvolvimento de aplicativos web', value: 'Desenvolvimento de aplicativos web', checked: false },
    { label: 'Design de interfaces de usuário', value: 'Design de interfaces de usuário', checked: false },
    { label: 'Design de logotipos', value: 'Design de logotipos', checked: false },
    { label: 'Design gráfico', value: 'Design gráfico', checked: false },
    { label: 'Desenvolvimento de jogos', value: 'Desenvolvimento de jogos', checked: false },
    { label: 'Design de produtos digitais', value: 'Design de produtos digitais', checked: false },
    { label: 'Design editorial', value: 'Design editorial', checked: false },
    { label: 'Animação', value: 'Animação', checked: false },
    { label: 'Marketing digital', value: 'Marketing digital', checked: false },
    { label: 'Desenvolvimento de aplicativos móveis', value: 'Desenvolvimento de aplicativos móveis', checked: false },
    { label: 'Desenvolvimento de software', value: 'Desenvolvimento de software', checked: false },
    { label: 'E-commerce', value: 'E-commerce', checked: false },
    { label: 'Design de embalagens', value: 'Design de embalagens', checked: false },
    { label: 'Design de experiência do usuário', value: 'Design de experiência do usuário', checked: false },
    { label: 'Design de interação', value: 'Design de interação', checked: false },
    { label: 'Design de mídia social', value: 'Design de mídia social', checked: false },
    { label: 'Design de marca', value: 'Design de marca', checked: false },
    { label: 'Desenvolvimento de realidade virtual', value: 'Desenvolvimento de realidade virtual', checked: false },
    { label: 'Desenvolvimento de realidade aumentada', value: 'Desenvolvimento de realidade aumentada', checked: false },
    { label: 'Ilustração', value: 'Ilustração', checked: false },
    { label: 'IT', value: 'IT', checked: false },
    { label: 'Design Gráfico', value: 'Design Grafico', checked: false },
    { label: 'Web Design', value: 'Web Design', checked: false },
    { label: 'Animação 3D', value: 'Animação 3D', checked: false },
    { label: 'Animação 2D', value: 'Animação 2D', checked: false },
    { label: 'Ilustração', value: 'Ilustração', checked: false },
    { label: 'Design Editorial', value: 'Design Editorial', checked: false }
];


checkOptionsThree = [
  { label: 'Junior', value: 'junior', checked: false },
  { label: 'Intermedio', value: 'intermedio', checked: false },
  { label: 'Senior', value: 'senior', checked: false }
];


  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }


  /* Data filtering functions */

  filteredData: Emprego[] = [];

  filterData() {
    this.filteredData = this.listOfData.filter((emprego) => {
      let filter = true;
      // Apply filter 1
      if (this.checkOptionsOne.length > 0) {
        filter = this.checkOptionsOne.filter(
          (item) => item.checked
        ).some(
          (item) => emprego.politica.indexOf(item.label) !== -1
        );
        console.log('filter 1' + filter);
      }

      return filter;
    });
    console.log("Applying filter 1...");
    console.log('A função filterData() foi chamada');
    console.log(this.checkOptionsOne);
    console.log(this.filteredData);
  }

  filterData2() {
    this.filteredData = this.listOfData.filter((emprego) => {
      let filter = true;

      // Apply filter 2
      if (this.checkOptionsTwo.length > 0) {
        filter = this.checkOptionsTwo.filter(
          (item) => item.checked
        ).some(
          (item) => emprego.area.indexOf(item.label) !== -1
        ) && filter; // include filter from previous condition
        console.log('filter 2' + filter);
      }
      return filter;
    });

    console.log("Applying filter 2...");
    console.log(this.checkOptionsTwo);
    console.log('A função filterData2() foi chamada');
    console.log(this.filteredData);
  }


  filterData4() {
    this.filteredData = this.listOfData.filter((emprego) => {
      let filter = true;
      // Check if any option is selected
      const selectedOptions = this.checkOptionsThree.filter(option => option.checked);
      if (selectedOptions.length > 0) {
        filter = selectedOptions.some(option => emprego.experiencia.indexOf(option.value) !== -1);
      }
      return filter;
    });
    console.log("Applying filter 4...");
    console.log(this.checkOptionsThree);
    console.log('A função filterData4() foi chamada');
    console.log(this.filteredData);
  }
  


  /* data filtering tags */

  tags = ['Empregos', 'Tag 2', 'Tag 3'];
  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
}
