/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuditableItemListComponent } from './auditableItem-list.component';

describe('AuditableItemListComponent', () => {
  let component: AuditableItemListComponent;
  let fixture: ComponentFixture<AuditableItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditableItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditableItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
