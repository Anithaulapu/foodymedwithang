import { TestBed } from '@angular/core/testing';

import { UseridService } from './userid.service';

describe('UseridService', () => {
  let service: UseridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
