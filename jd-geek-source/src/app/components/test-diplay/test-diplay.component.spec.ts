import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDiplayComponent } from './test-diplay.component';

describe('TestDiplayComponent', () => {
  let component: TestDiplayComponent;
  let fixture: ComponentFixture<TestDiplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDiplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
