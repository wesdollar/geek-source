import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleDownIconComponent } from './angle-down-icon.component';

describe('AngleDownIconComponent', () => {
  let component: AngleDownIconComponent;
  let fixture: ComponentFixture<AngleDownIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngleDownIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
