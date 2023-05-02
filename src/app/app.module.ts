import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { VagasComponent } from './vagas/vagas.component';
import { CandidaturaComponent } from './candidatura/candidatura.component';
import { NzUploadFile } from 'ng-zorro-antd/upload';

/* FontAwesome Module */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/*ng-zorro modules*/
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResultModule } from 'ng-zorro-antd/result';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


/* serachpipe Module */
import { Ng2SearchPipeModule } from 'ng2-search-filter';



registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VagasComponent,
    CandidaturaComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzLayoutModule,
    NzImageModule,
    NzButtonModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    NzCardModule,
    NzTagModule,
    FontAwesomeModule,
    NzTypographyModule,
    NzFormModule,
    NzBreadCrumbModule,
    NzRadioModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzSliderModule,
    NzSelectModule,
    NzAutocompleteModule,
    NzUploadModule,
    NzResultModule,

    Ng2SearchPipeModule,
    RouterModule.forChild([{ path: '', component: VagasComponent }]),
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_PT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
