import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreShowLess } from './show-more-show-less';

xdescribe('ShowMoreShowLess', () => {
  let component: ShowMoreShowLess;
  let fixture: ComponentFixture<ShowMoreShowLess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMoreShowLess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMoreShowLess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
