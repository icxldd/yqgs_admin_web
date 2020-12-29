/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbuseReportAuditComponent } from './abuse-report-audit.component';

describe('AbuseReportAuditComponent', () => {
  let component: AbuseReportAuditComponent;
  let fixture: ComponentFixture<AbuseReportAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbuseReportAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbuseReportAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
