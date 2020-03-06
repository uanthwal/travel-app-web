import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyTopComponent } from './verify-top.component';

describe('VerifyTopComponent', () => {
  let component: VerifyTopComponent;
  let fixture: ComponentFixture<VerifyTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
