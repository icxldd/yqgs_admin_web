/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuildMemberComponent } from './guild-member.component';

describe('GuildMemberComponent', () => {
  let component: GuildMemberComponent;
  let fixture: ComponentFixture<GuildMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
