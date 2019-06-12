import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternDetailPage } from './pattern-detail.page';

describe('PatternDetailPage', () => {
  let component: PatternDetailPage;
  let fixture: ComponentFixture<PatternDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
