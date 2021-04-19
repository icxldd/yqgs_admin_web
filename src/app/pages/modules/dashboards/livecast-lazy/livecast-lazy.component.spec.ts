/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LivecastLazyComponent } from './livecast-lazy.component';

describe('LivecastLazyComponent', () => {
  let component: LivecastLazyComponent;
  let fixture: ComponentFixture<LivecastLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivecastLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecastLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
