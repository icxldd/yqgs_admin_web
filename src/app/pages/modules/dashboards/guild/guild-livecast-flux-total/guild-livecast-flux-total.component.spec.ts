/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuildLivecastFluxTotalComponent } from './guild-livecast-flux-total.component';

describe('GuildLivecastFluxTotalComponent', () => {
  let component: GuildLivecastFluxTotalComponent;
  let fixture: ComponentFixture<GuildLivecastFluxTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildLivecastFluxTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildLivecastFluxTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
