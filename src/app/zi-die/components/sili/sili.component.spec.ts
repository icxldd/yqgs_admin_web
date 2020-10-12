/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiliComponent } from './sili.component';

describe('SiliComponent', () => {
  let component: SiliComponent;
  let fixture: ComponentFixture<SiliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
