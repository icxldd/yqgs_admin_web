/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LivecastComponent } from './livecast.component';

describe('LivecastComponent', () => {
  let component: LivecastComponent;
  let fixture: ComponentFixture<LivecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
