/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataCategoryTreeComponent } from './data-category-tree.component';

describe('DataCategoryTreeComponent', () => {
  let component: DataCategoryTreeComponent;
  let fixture: ComponentFixture<DataCategoryTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCategoryTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCategoryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
