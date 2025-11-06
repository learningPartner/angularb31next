import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFamily } from './user-family';

xdescribe('UserFamily', () => {
  let component: UserFamily;
  let fixture: ComponentFixture<UserFamily>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFamily]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFamily);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
