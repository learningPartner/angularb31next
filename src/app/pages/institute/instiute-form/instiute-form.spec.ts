import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiuteForm } from './instiute-form';

describe('InstiuteForm', () => {
  let component: InstiuteForm;
  let fixture: ComponentFixture<InstiuteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstiuteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstiuteForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
