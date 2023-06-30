import { TestBed } from '@angular/core/testing';

import { ModalDetallesService } from './modal-detalles.service';

describe('ModalDetallesService', () => {
  let service: ModalDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
