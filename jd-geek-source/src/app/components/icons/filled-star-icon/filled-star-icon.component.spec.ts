import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledStarIconComponent } from './filled-star-icon.component';

describe('FilledStarIconComponent', () => {
  let component: FilledStarIconComponent;
  let fixture: ComponentFixture<FilledStarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledStarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledStarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
