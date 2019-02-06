import { TestBed, inject } from '@angular/core/testing';

import { ContactsendService } from './contactsend.service';

describe('ContactsendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsendService]
    });
  });

  it('should be created', inject([ContactsendService], (service: ContactsendService) => {
    expect(service).toBeTruthy();
  }));
});
