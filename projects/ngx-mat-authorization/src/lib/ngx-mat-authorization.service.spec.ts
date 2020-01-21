import { TestBed } from '@angular/core/testing';

import { NgxMatAuthorizationService } from './ngx-mat-authorization.service';

describe('NgxMatAuthorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatAuthorizationService = TestBed.get(NgxMatAuthorizationService);
    expect(service).toBeTruthy();
  });
});
