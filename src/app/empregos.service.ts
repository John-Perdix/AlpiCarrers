import { Injectable } from '@angular/core';

export interface Emprego {
  posicao: string;
  empresa: string;
  area: string;
  politica: string;
  local: string;
  imagem: string;
  salario : string;
  descricao : string;
  experiencia : string;
  skills: {1: string, 2: string, 3: string, 4: string, 5: string,  6: string,  7: string,  8: string,  9: string,  10: string}
}

@Injectable({
  providedIn: 'root'
})
export class EmpregosService {
  /* Gerar empregos aleatórios */
  /* Empresas = [];
  Empregos: any[] = [];
  descrições = ['This transaction was made in a bussiness context', 'This was a personal transaction', 'This was a commercial transaction', 'This was a transaction for traveling porpuses'];
  posicao = ['Web designer', 'Developer', 'Product designer', 'Graphic designer']
  
  ngOnInit() {
    this.generateRandomTransactions();
  }

  generateRandomTransactions() {
    for (let i = 0; i < 100; i++) {
      const index = i;
      const nameIndex = Math.floor(Math.random() * this.names.length);
      const descriptionIndex = Math.floor(Math.random() * this.descriptions.length);
      const randomStatusIndex = Math.floor(Math.random() * 3);
      const status = Object.values(Status)[randomStatusIndex];
      const transaction = {
        id: index,
        name: this.names[nameIndex],
        account: Math.floor(Math.random() * 1000000000000000000),
        description: this.descriptions[descriptionIndex],
        amount: Math.floor(Math.random() * 1000),
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
        statusText: status.text,
        statusIcon: status.icon
      };
      this.transactions.push(transaction);
    }
    this.firstFiveTransactions = this.transactions.slice(0, 5);
  }
 */


  /* -------------------------------------------------- */

  constructor() { }

  listOfData: Emprego[] = [
    {
      posicao: 'Product designer',
      empresa: 'Revolut',
      area: 'UX-UI',
      politica: 'Hibrido',
      local: 'Coimbra',
      imagem: '../../assets/empresas/revolut.png',
      salario : '900€ - 1200€',
      descricao: 'Prototipagem para as plataformas web e mobile da revolut',
      experiencia : '2 anos experiencia- junior',
      skills: {1:'UX-UI', 2:'Ilustracao', 3:'Figma', 4:'Adobe suit', 5:'',  6:'',  7:'',  8:'',  9:'',  10:''}
    },
    {
      posicao: 'Web dev',
      empresa: 'Div.pt',
      area: 'IT',
      politica: 'Hibrido',
      local: 'Coimbra',
      imagem: '../../assets/empresas/divpt.png',
      salario : '900€ - 1200€',
      descricao: 'Prototipagem para as plataformas web e mobile da revolut',
      experiencia : '3 anos experiencia- junior',
      skills: {1:'UX-UI', 2:'html', 3:'css', 4:'javascript', 5:'typescript',  6:'Adobe suit',  7:'Figma',  8:'Visual Studio',  9:'',  10:''}
    },
    {
      posicao: 'Animador 3D',
      empresa: 'Intel',
      area: 'Animação',
      politica: 'Hibrido',
      local: 'Coimbra',
      imagem: '../../assets/empresas/intel_logo.png',
      salario : '1800€ - 2200€',
      descricao: 'Desenvolvimento de animações para o interface das apps. Deve estar completamente à vontade com conceitos como modelação, animacão, materiais e shading.',
      experiencia : '10 anos experiencia- senior',
      skills: {1:'UX-UI', 2:'Ilustracao', 3:'Figma', 4:'Adobe suit', 5:'Blender',  6:'Octane',  7:'Redshift',  8:'Cinema-4D',  9:'',  10:''}
    }
  ];

  getEmprego(): Emprego[] {
    return this.listOfData;
  }
}
