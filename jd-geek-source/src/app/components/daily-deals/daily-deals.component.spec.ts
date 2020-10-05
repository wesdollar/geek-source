import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDealsComponent } from './daily-deals.component';

describe('DailyDealsComponent', () => {
  let component: DailyDealsComponent;
  let fixture: ComponentFixture<DailyDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
