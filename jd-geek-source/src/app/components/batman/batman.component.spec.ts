import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmanComponent } from './batman.component';

describe('BatmanComponent', () => {
  let component: BatmanComponent;
  let fixture: ComponentFixture<BatmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
