import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDropdownMenuComponent } from './template-driven-dropdown-menu.component';

describe('TemplateDrivenDropdownMenuComponent', () => {
  let component: TemplateDrivenDropdownMenuComponent;
  let fixture: ComponentFixture<TemplateDrivenDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenDropdownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
