/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdeaReplierComponent } from './idea-replier.component';

describe('IdeaReplierComponent', () => {
  let component: IdeaReplierComponent;
  let fixture: ComponentFixture<IdeaReplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaReplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaReplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
