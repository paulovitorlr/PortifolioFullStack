import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbarmobile } from './navbarmobile';

describe('Navbarmobile', () => {
  let component: Navbarmobile;
  let fixture: ComponentFixture<Navbarmobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbarmobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbarmobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
