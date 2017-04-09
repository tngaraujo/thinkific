/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideooverlayComponent } from './videooverlay.component';

describe('VideooverlayComponent', () => {
  let component: VideooverlayComponent;
  let fixture: ComponentFixture<VideooverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideooverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideooverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
