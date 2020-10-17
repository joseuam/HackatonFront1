import { TestBed } from '@angular/core/testing';

import { ReceiverJsonServiceService } from './receiver-json-service.service';

describe('ReceiverJsonServiceService', () => {
  let service: ReceiverJsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiverJsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
