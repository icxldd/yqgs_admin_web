/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicListComponent } from './basic-list.component';

describe('BasicListComponent', () => {
  let component: BasicListComponent;
  let fixture: ComponentFixture<BasicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
