import { Injectable } from '@angular/core';

export const Politica = {
  remoto: 'Remoto',
  hibrido: 'Hibrido',
  presencial:  'Presencial'
};

export const Experiencia = {
  junior: 'Junior',
  intermedio: 'Intermedio',
  senior:  'Senior'
};



export interface Emprego {
  id: number,
  posicao: string;
  empresa: string;
  area: string;
  politica: string;
  local: string;
  imagem: string;
  salario : number;
  descricao : string;
  experiencia : string;
  /* skills: {1: string, 2: string, 3: string, 4: string, 5: string,  6: string,  7: string,  8: string,  9: string,  10: string}; */
  skills: { [key: number]: string };
}

@Injectable({
  providedIn: 'root'
})
export class EmpregosService {
  [x: string]: any;
  /* Gerar empregos aleatórios */
  listOfData: Emprego[] = [];
  firstThreeEmpregos: Emprego[] = [];
  descricoes = ['Prototipagem para as plataformas web e mobile da revolut', 'Desenvolvimento de animações para o interface das apps. Deve estar completamente à vontade com conceitos como modelação, animacão, materiais e shading.', 'Create appealing UI across multiple titles, in development and live, working directly with the Art Director.', 'Um designer gráfico é responsável por criar elementos visuais que comunicam uma mensagem ou ideia específica. Isso pode incluir logotipos, layouts, gráficos, ilustrações, tipografia e muito mais. Eles usam software de design para criar e manipular imagens e outros elementos gráficos.', 'Um web designer de UX-UI trabalha no design da interface do usuário de um site ou aplicativo, garantindo que a experiência do usuário seja intuitiva e agradável. Eles criam wireframes, protótipos e designs finais usando ferramentas de design e colaboram com desenvolvedores para garantir que a implementação do design seja precisa.', 'Um desenvolvedor front-end trabalha na parte do site ou aplicativo que os usuários interagem diretamente, como botões, menus e outros elementos da interface do usuário. Eles usam linguagens como HTML, CSS e JavaScript para criar páginas da web interativas e responsivas.', 'Um desenvolvedor back-end trabalha na parte do site ou aplicativo que os usuários não veem, como o servidor e o banco de dados. Eles usam linguagens de programação como Python, Ruby e Java para criar aplicativos escaláveis ​​e eficientes que gerenciam dados e processos de negócios.', ' Um desenvolvedor full-stack tem habilidades em ambos os lados do desenvolvimento de aplicativos - front-end e back-end. Eles podem construir um aplicativo completo do início ao fim, desde a interface do usuário até o servidor e o banco de dados.', 'Um animador ou designer de motion trabalha na criação de animações e gráficos em movimento para uma variedade de projetos, incluindo anúncios publicitários, vídeos, jogos e outros tipos de mídia. Eles usam software de animação e gráficos em movimento para criar designs atraentes e interativos que prendem a atenção do público.'];
  posicoes = ['Web designer', 'Developer', 'Product designer', 'Graphic designer', 'Full stack developer', 'Motion designer', 'Front-end developer', 'back-end developer']
  empresas = ['div.pt', 'Revolut', 'Intel', 'Bliss Applications', 'Burocratik', 'DigitalWorks', 'Wingman', 'Novagest', 'ExcentricGrey', 'Nm Design', 'BySide', 'Avanade', 'Pixelmatters']
  path_imagens = ['../../assets/empresas/revolut.png', '../../assets/empresas/divpt.png', '../../assets/empresas/intel_logo.png'];
  skills = ['HTML',  'CSS',  'JavaScript',  'React',  'Angular',  'Vue.js',  'Node.js',  'PHP',  'Python',  'Ruby',  'MySQL',  'PostgreSQL',  'MongoDB',  'RESTful API design',  'GraphQL',  'Adobe Photoshop',  'Adobe Illustrator',  'Adobe InDesign',  'Sketch',  'Figma',  'UI/UX design',  'Responsive design',  'Mobile app design',  'Motion graphics',  '3D modeling',  'Video editing',  'Git',  'Agile methodology',  'Project management',  'Problem-solving', 'Blender', 'Cinema 4D', 'Octane'];
  areas = [
    'Desenvolvimento de aplicativos web',
    'Design de interfaces de usuário',
    'Design de logotipos',
    'Design gráfico',
    'Desenvolvimento de jogos',
    'Design de produtos digitais',
    'Design editorial',
    'Animação',
    'Marketing digital',
    'Desenvolvimento de aplicativos móveis',
    'Desenvolvimento de software',
    'E-commerce',
    'Design de embalagens',
    'Design de experiência do usuário',
    'Design de interação',
    'Design de mídia social',
    'Design de marca',
    'Desenvolvimento de realidade virtual',
    'Desenvolvimento de realidade aumentada',
    'Ilustração',
    'IT'
  ]

  locais= [  'Aveiro',  'Beja',  'Braga',  'Bragança',  'Castelo Branco',  'Coimbra',  'Évora',  'Faro',  'Guarda',  'Leiria',  'Lisboa',  'Portalegre',  'Porto',  'Santarém',  'Setúbal',  'Viana do Castelo',  'Vila Real',  'Viseu']
  
  ngOnInit() {
    this.generateRandomEmpregos();
    this.getRandomSkills();
  }

value_max = 7000;
value_min = 800;



  generateRandomEmpregos() {
    for (let i = 0; i < 100; i++) {
      const index = i;
      const posicaoIndex = Math.floor(Math.random() * this.posicoes.length);
      const empresaIndex = Math.floor(Math.random() * this.empresas.length);
      const areaIndex = Math.floor(Math.random() * this.areas.length);
      const descricaoIndex = Math.floor(Math.random() * this.descricoes.length);
      const randompPoliticaIndex = Math.floor(Math.random() * 3);
      const politica = Object.values(Politica)[randompPoliticaIndex];
      const localIndex = Math.floor(Math.random() * this.locais.length);
      const imagemIndex = Math.floor(Math.random() * this.path_imagens.length);
      const salario = Math.floor(Math.random() * (this.value_max - this.value_min + 1) + this.value_min);
      const randompExperienciaIndex = Math.floor(Math.random() * 3);
      const experiencia = Object.values(Experiencia)[randompExperienciaIndex];
      const skills = this.getRandomSkills();
      const emprego = {
        id: index,
        posicao: this.posicoes[posicaoIndex],
        empresa: this.empresas[empresaIndex],
        area: this.areas[areaIndex],
        politica : politica,
        local: this.locais[localIndex],
        imagem: this.path_imagens[imagemIndex],
        salario: salario,
        descricao: this.descricoes[descricaoIndex],
        experiencia: experiencia,
        skills: skills
      };
      this.listOfData.push(emprego);
    }
    this.firstThreeEmpregos = this.listOfData.slice(0, 4);
  }

  getRandomSkills(): { [key: number]: string } {
    const numSkills = Math.floor(Math.random() * 5) + 5; // generates a random number between 5 and 10
    const skills_random: { [key: number]: string } = {};
    for (let i = 1; i <= numSkills; i++) {
      const skillIndex = Math.floor(Math.random() * this.skills.length);
      skills_random[i] = this.skills[skillIndex];
    }
    return skills_random;
  }


  /* -------------------------------------------------- */

  constructor() {this.generateRandomEmpregos(); }

  getEmprego(): Emprego[] {
    return this.listOfData;
  }


  getEmpregoSlice(): Emprego[] {
    return this.firstThreeEmpregos;
  }
}
