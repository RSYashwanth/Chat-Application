import { TestBed } from '@angular/core/testing';

import { ClickHandlerService } from './click-handler.service';

describe('ClickHandlerService', () => {
  let service: ClickHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
