/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuanwangComponent } from './guanwang.component';

describe('GuanwangComponent', () => {
  let component: GuanwangComponent;
  let fixture: ComponentFixture<GuanwangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuanwangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuanwangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
