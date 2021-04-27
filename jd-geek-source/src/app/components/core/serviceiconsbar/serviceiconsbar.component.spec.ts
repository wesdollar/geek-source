import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceiconsbarComponent } from './serviceiconsbar.component';

describe('ServiceiconsbarComponent', () => {
  let component: ServiceiconsbarComponent;
  let fixture: ComponentFixture<ServiceiconsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceiconsbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceiconsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
