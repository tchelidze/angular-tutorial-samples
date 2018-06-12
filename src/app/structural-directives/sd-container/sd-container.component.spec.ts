import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdContainerComponent } from './sd-container.component';

describe('SdContainerComponent', () => {
  let component: SdContainerComponent;
  let fixture: ComponentFixture<SdContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
