import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

/* Serviço */
import { EmpregosService } from '../empregos.service';
import { Emprego } from '../empregos.service';

/* FontAwesome Icons */
import { faMoneyBillWave, faLocationDot, faHouseLaptop, faBriefcase } from '@fortawesome/free-solid-svg-icons';

/* Button size module de ng-zorro */
import { NzButtonSize } from 'ng-zorro-antd/button';

/* Marks for slider module de ng-zorro */
import { NzMarks } from 'ng-zorro-antd/slider';

/* searchPipes  */
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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

  /* FontAwesome Icons */
  faHouseLaptop = faHouseLaptop;
  faBriefcase=faBriefcase;

  /* Autocomplete de locais */
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.locais = value ? [value, value + value, value + value + value] : [];
    this.filterData3();
  }
  locais = this.empregosService.locais;

  getEmprego(): void {
    this.listOfData = this.empregosService.getEmprego();
  }

  listOfData: Emprego[] = [];

  constructor(private empregosService: EmpregosService, private router: Router) { }

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


checkOptionsExperiencia = [
  { label: 'Junior', value: 'junior', checked: false },
  { label: 'Intermedio', value: 'intermedio', checked: false },
  { label: 'Senior', value: 'senior', checked: false }
];

checkOptionsLocal = [
  { label: 'Aveiro', value: 'Aveiro', checked: false },
  { label: 'Beja', value: 'Beja', checked: false },
  { label: 'Braga', value: 'Braga', checked: false },
  { label: 'Bragança', value: 'Bragança', checked: false },
  { label: 'Castelo Branco', value: 'Castelo Branco', checked: false },
  { label: 'Coimbra', value: 'Coimbra', checked: false },
  { label: 'Évora', value: 'Évora', checked: false },
  { label: 'Faro', value: 'Faro', checked: false },
  { label: 'Guarda', value: 'Guarda', checked: false },
  { label: 'Leiria', value: 'Leiria', checked: false },
  { label: 'Lisboa', value: 'Lisboa', checked: false },
  { label: 'Portalegre', value: 'Portalegre', checked: false },
  { label: 'Porto', value: 'Porto', checked: false },
  { label: 'Santarém', value: 'Santarém', checked: false },
  { label: 'Setúbal', value: 'Setúbal', checked: false },
  { label: 'Viana do Castelo', value: 'Viana do Castelo', checked: false },
  { label: 'Vila Real', value: 'Vila Real', checked: false },
  { label: 'Viseu', value: 'Viseu', checked: false }
];



  /* Data filtering functions */

  filteredData: Emprego[] = [];
  /* Filtro politica */
  filterData() {
    const checkedOptions = this.checkOptionsOne.filter(item => item.checked);
  
    this.filteredData = checkedOptions.length === 0
      ? this.listOfData
      : this.listOfData.filter((emprego) => {
          let filter = checkedOptions.some(
            (item) => emprego.politica.indexOf(item.label) !== -1
          );
          console.log('filter 1' + filter);
          return filter;
        });
  }

  /* filtro Area */
  filterData2() {
    const checkedOptions = this.checkOptionsTwo.filter(item => item.checked);
  
    this.filteredData = checkedOptions.length === 0
      ? this.listOfData
      : this.listOfData.filter((emprego) => {
          let filter = checkedOptions.some(
            (item) => emprego.area.indexOf(item.label) !== -1
          );
          console.log('filter 1' + filter);
          return filter;
        });
  }

  /* filtro local */
  filterData3() {
    this.filteredData = this.listOfData.filter((item) => {
      return item.local.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1;
    });
  }
  
  /* filtro salário */
  filterData4() {
    this.filteredData = this.listOfData.filter(item => {
      console.log(this.value[0] && this.value[1]);
      console.log(this.tags)

      /* update and slice the tags values for salario */
      this.tags = [`${this.value[0]}€ - ${this.value[1]}€`, ...this.tags.slice(1)];
      

      /* Return a data filters */
      return item.salario >= this.value[0] && item.salario <= this.value[1];

    });
  }

  /* filtro Experiencia */
  filterData5() {
    try {
      console.log('filterData5() called');
  
      const checkedOptions = this.checkOptionsExperiencia.filter(item => item.checked);
      console.log('checkedOptions:', checkedOptions);
      console.log('checkedOptions lenght: ', checkedOptions.length);
    
      this.filteredData = checkedOptions.length === 0
        ? this.listOfData
        : this.listOfData.filter((emprego) => {
            let filter = checkedOptions.some(
              (item) => emprego.experiencia.indexOf(item.label) !== -1
            );
            return filter;
          });
    } catch (error) {
      console.error(error);
    }
  }
  
  /* Função para passar a data para a candidatura */
  navigateToCandidatura(data: any) {
    this.router.navigate(['/candidatura'], { state: { data: data } });
  }


  /* data filtering tags */

  tags: string[] = [this.value_min + '€ - ' + this.value_max + '€'];
  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  /* handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  } */
  handleClose(removedTag: any): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
    this.filterData();
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
  
  updateSingleChecked(): void {
    /* Cheked 1 */
    const checkedCount = this.checkOptionsOne.filter(item => item.checked).length;
    this.allChecked = checkedCount === this.checkOptionsOne.length;
    this.indeterminate = checkedCount > 0 && checkedCount < this.checkOptionsOne.length;

    /* Cheked 2 */
    const checkedCount2 = this.checkOptionsTwo.filter(item => item.checked).length;
    this.allChecked = checkedCount2 === this.checkOptionsTwo.length;
    this.indeterminate = checkedCount2 > 0 && checkedCount2 < this.checkOptionsTwo.length;

   

  
    // Add tag if a checkbox is checked and tag doesn't exist
    if (checkedCount > 0) {
      const checkedValuesOne = this.checkOptionsOne.filter(item => item.checked).map(item => item.label);
      /* Cheked 1 */
      checkedValuesOne.forEach(value => {
        if (!this.tags.includes(value)) {
          this.tags.push(value);
        }
      });
    } else {
      const lastIndex = this.tags.length - 1;
      if (lastIndex >= 0) {
        this.tags.splice(lastIndex, 1); // remove the last tag from the tags array
      }
    }

    /* Checked 2 */
    if (checkedCount2 > 0) {
      const checkedValuesTwo = this.checkOptionsTwo.filter(item => item.checked).map(item => item.label);
    checkedValuesTwo.forEach(value => {
      if (!this.tags.includes(value)) {
        this.tags.push(value);
      }
    });
  }

/* Checked 3 */

  }

  /* Drawer at 764px Mobile */
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  
}
