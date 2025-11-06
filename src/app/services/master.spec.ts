import { TestBed } from '@angular/core/testing';

import { Master } from './master';

xdescribe('Master', () => {
  let service: Master;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Master);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
