import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBranchFyearComponent } from './select-branch-fyear.component';

describe('SelectBranchFyearComponent', () => {
  let component: SelectBranchFyearComponent;
  let fixture: ComponentFixture<SelectBranchFyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBranchFyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBranchFyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
