import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroPercentFinancingIconComponent } from './zero-percent-financing-icon.component';

describe('ZeroPercentFinancingIconComponent', () => {
  let component: ZeroPercentFinancingIconComponent;
  let fixture: ComponentFixture<ZeroPercentFinancingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroPercentFinancingIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroPercentFinancingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
