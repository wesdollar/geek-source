import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfStarIconComponent } from './half-star-icon.component';

describe('HalfStarIconComponent', () => {
  let component: HalfStarIconComponent;
  let fixture: ComponentFixture<HalfStarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfStarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfStarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
