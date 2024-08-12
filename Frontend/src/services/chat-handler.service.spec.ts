import { TestBed } from '@angular/core/testing';

import { ChatHandlerService } from './chat-handler.service';

describe('ChatHandlerService', () => {
  let service: ChatHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
