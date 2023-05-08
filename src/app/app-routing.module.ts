import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { VagasComponent } from './vagas/vagas.component';
import { CandidaturaComponent } from './candidatura/candidatura.component';
import { InfoVagaComponent } from './info-vaga/info-vaga.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "vagas", component: VagasComponent},
  {path: "candidatura", component: CandidaturaComponent},
  {path: "info-vaga", component: InfoVagaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
