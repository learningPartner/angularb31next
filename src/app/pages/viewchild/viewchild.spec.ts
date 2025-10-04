import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewchild } from './viewchild';

describe('Viewchild', () => {
  let component: Viewchild;
  let fixture: ComponentFixture<Viewchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewchild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewchild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
