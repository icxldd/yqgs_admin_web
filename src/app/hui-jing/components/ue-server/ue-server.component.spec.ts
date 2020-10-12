/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UeServerComponent } from './ue-server.component';

describe('UeServerComponent', () => {
  let component: UeServerComponent;
  let fixture: ComponentFixture<UeServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
