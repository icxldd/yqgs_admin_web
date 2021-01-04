/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuildLivecastFluxChargeComponent } from './guild-livecast-flux-charge.component';

describe('GuildLivecastFluxChargeComponent', () => {
  let component: GuildLivecastFluxChargeComponent;
  let fixture: ComponentFixture<GuildLivecastFluxChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildLivecastFluxChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildLivecastFluxChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
