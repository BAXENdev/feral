import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowScriptEditorComponent } from './workflow-script-editor.component';

describe('WorkflowScriptEditorComponent', () => {
  let component: WorkflowScriptEditorComponent;
  let fixture: ComponentFixture<WorkflowScriptEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowScriptEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowScriptEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
