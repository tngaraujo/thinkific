/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewvideoComponent } from './newvideo.component';

describe('NewvideoComponent', () => {
  let component: NewvideoComponent;
  let fixture: ComponentFixture<NewvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
