/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UeClientComponent } from './ue-client.component';

describe('UeClientComponent', () => {
  let component: UeClientComponent;
  let fixture: ComponentFixture<UeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
