import { TestBed } from '@angular/core/testing';

import { CreateServiceService } from './create-service.service';

describe('CreateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateServiceService = TestBed.get(CreateServiceService);
    expect(service).toBeTruthy();
  });
});
