/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuildmemberListComponent } from './guildmember-list.component';

describe('GuildmemberListComponent', () => {
  let component: GuildmemberListComponent;
  let fixture: ComponentFixture<GuildmemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildmemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildmemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
