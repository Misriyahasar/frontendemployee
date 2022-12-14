import { TestBed } from '@angular/core/testing';

import { AdminempService } from './adminemp.service';

describe('AdminempService', () => {
  let service: AdminempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
