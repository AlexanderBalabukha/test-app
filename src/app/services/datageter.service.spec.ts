import { TestBed, inject } from '@angular/core/testing';

import { DatageterService } from './datageter.service';

describe('DatageterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatageterService]
    });
  });

  it('should be created', inject([DatageterService], (service: DatageterService) => {
    expect(service).toBeTruthy();
  }));
});
