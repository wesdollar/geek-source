import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldoutComponent } from './foldout.component';

describe('FoldoutComponent', () => {
  let component: FoldoutComponent;
  let fixture: ComponentFixture<FoldoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
