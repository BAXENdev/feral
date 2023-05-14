import { Component } from '@angular/core';
import { Script } from 'src/app/interfaces/workflowService/script';
import { WorkflowHeaderService } from 'src/app/services/WorkflowHeaderService/workflow-header.service';
import { WorkflowService } from 'src/app/services/WorkflowService/workflow.service';

@Component({
  selector: 'app-workflow-script-editor',
  templateUrl: './workflow-script-editor.component.html',
  styleUrls: ['./workflow-script-editor.component.scss']
})
export class WorkflowScriptEditorComponent {

  script: Script

  constructor(private workflowService: WorkflowService, private workflowHeaderService: WorkflowHeaderService) {}

  ngOnInit () {
    let workflowName = this.workflowHeaderService.workflow?.workflowName
    let filename = this.workflowHeaderService.filename || ""
    this.workflowService.getWorkflowScript(workflowName || "", filename).subscribe(script => this.script = script)
  }
}
