import { TestBed, inject } from '@angular/core/testing';

import { StudentServerService } from './student-server.service';

describe('StudentServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentServerService]
    });
  });

  it('should be created', inject([StudentServerService], (service: StudentServerService) => {
    expect(service).toBeTruthy();
  }));
});
