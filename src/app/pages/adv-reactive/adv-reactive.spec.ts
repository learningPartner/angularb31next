import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvReactive } from './adv-reactive';

describe('AdvReactive', () => {
  let component: AdvReactive;
  let fixture: ComponentFixture<AdvReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
