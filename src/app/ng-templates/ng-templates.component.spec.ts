import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplatesComponent } from './ng-templates.component';

describe('NgTemplatesComponent', () => {
  let component: NgTemplatesComponent;
  let fixture: ComponentFixture<NgTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
