import { Component } from '@angular/core';

/* FontAwesome Icons */
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

interface Emprego {
  posicao: string;
  empresa: string;
  area: string;
  politica: string;
  local: string;
}

import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent {

  /* FontAwesome Icons */
  faMoneyBillWave = faMoneyBillWave;

  color= '#D85F35';

  size: NzButtonSize = 'large';

  listOfData: Emprego[] = [
    {
      posicao: 'Web dev',
      empresa: 'div.pt',
      area: 'IT',
      politica: 'Hibrido',
      local: 'Coimbra',
    },
    {
      posicao: 'Web dev',
      empresa: 'div.pt',
      area: 'IT',
      politica: 'Hibrido',
      local: 'Coimbra',
    },
    {
      posicao: 'Web dev',
      empresa: 'div.pt',
      area: 'IT',
      politica: 'Hibrido',
      local: 'Coimbra',
    }
  ];
}
