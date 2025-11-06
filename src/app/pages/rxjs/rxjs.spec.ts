import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs } from './rxjs';

xdescribe('Rxjs', () => {
  let component: Rxjs;
  let fixture: ComponentFixture<Rxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
