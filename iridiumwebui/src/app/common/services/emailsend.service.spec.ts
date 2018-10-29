import { TestBed, inject } from '@angular/core/testing';

import { EmailsendService } from './emailsend.service';

describe('EmailsendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailsendService]
    });
  });

  it('should be created', inject([EmailsendService], (service: EmailsendService) => {
    expect(service).toBeTruthy();
  }));
});
