/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuildLivecastFluxConsumeComponent } from './guild-livecast-flux-consume.component';

describe('GuildLivecastFluxConsumeComponent', () => {
  let component: GuildLivecastFluxConsumeComponent;
  let fixture: ComponentFixture<GuildLivecastFluxConsumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildLivecastFluxConsumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildLivecastFluxConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
