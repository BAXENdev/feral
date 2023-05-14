import { Component, OnInit } from '@angular/core';
import { WorkflowLog } from 'src/app/interfaces/workflowService/workflow-log';
import { WorkflowService } from 'src/app/services/WorkflowService/workflow.service';
import { WORKFLOW_CONSTANTS } from 'src/app/config/constants';
import { Script } from 'src/app/interfaces/workflowService/script';
import { Workflow } from 'src/app/interfaces/workflowService/workflow';
import { WorkflowHeaderService } from 'src/app/services/WorkflowHeaderService/workflow-header.service';


@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnInit {

  workflowLog: WorkflowLog

  constructor(private workflowService: WorkflowService, private workflowHeaderService: WorkflowHeaderService) {}

  ngOnInit(): void {
    let req = this.workflowService.getWorkflowLog()
    req.subscribe(workflowLog => this.workflowLog = workflowLog)
  }

  openWorkflow(workflow: Workflow) {
    this.workflowHeaderService.routeWorkflow(workflow)
    console.log(this.workflowHeaderService.workflow?.workflowName)
  }
}
