import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemContaoner } from './ng-tem-contaoner';

describe('NgTemContaoner', () => {
  let component: NgTemContaoner;
  let fixture: ComponentFixture<NgTemContaoner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemContaoner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemContaoner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
