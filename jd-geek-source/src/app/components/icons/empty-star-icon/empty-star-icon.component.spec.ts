import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStarIconComponent } from './empty-star-icon.component';

describe('EmptyStarIconComponent', () => {
  let component: EmptyStarIconComponent;
  let fixture: ComponentFixture<EmptyStarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyStarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyStarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
