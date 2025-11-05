import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiuteList } from './instiute-list';

describe('InstiuteList', () => {
  let component: InstiuteList;
  let fixture: ComponentFixture<InstiuteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstiuteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstiuteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
