import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTechSupportIconComponent } from './free-tech-support-icon.component';

describe('FreeTechSupportIconComponent', () => {
  let component: FreeTechSupportIconComponent;
  let fixture: ComponentFixture<FreeTechSupportIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeTechSupportIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTechSupportIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
