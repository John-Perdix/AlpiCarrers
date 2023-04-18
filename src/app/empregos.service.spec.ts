import { TestBed } from '@angular/core/testing';

import { EmpregosService } from './empregos.service';

describe('EmpregosService', () => {
  let service: EmpregosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpregosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
