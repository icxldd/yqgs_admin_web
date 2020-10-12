/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LtappComponent } from './ltapp.component';

describe('LtappComponent', () => {
  let component: LtappComponent;
  let fixture: ComponentFixture<LtappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
