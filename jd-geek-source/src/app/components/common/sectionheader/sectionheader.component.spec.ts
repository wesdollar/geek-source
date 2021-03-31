import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionheaderComponent } from './sectionheader.component';

describe('SectionheaderComponent', () => {
  let component: SectionheaderComponent;
  let fixture: ComponentFixture<SectionheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
