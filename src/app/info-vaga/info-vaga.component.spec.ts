import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVagaComponent } from './info-vaga.component';

describe('InfoVagaComponent', () => {
  let component: InfoVagaComponent;
  let fixture: ComponentFixture<InfoVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
