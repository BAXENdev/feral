import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowVideoViewerComponent } from './workflow-video-viewer.component';

describe('WorkflowVideoViewerComponent', () => {
  let component: WorkflowVideoViewerComponent;
  let fixture: ComponentFixture<WorkflowVideoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowVideoViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowVideoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
