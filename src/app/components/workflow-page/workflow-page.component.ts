import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Workflow } from 'src/app/interfaces/workflowService/workflow';
import { WorkflowHeaderService } from 'src/app/services/WorkflowHeaderService/workflow-header.service';
import { WorkflowService } from 'src/app/services/WorkflowService/workflow.service';

@Component({
  selector: 'app-workflow-page',
  templateUrl: './workflow-page.component.html',
  styleUrls: ['./workflow-page.component.scss']
})
export class WorkflowPageComponent implements OnInit {

  workflow: Workflow | null = null

  constructor(private workflowService: WorkflowService, private workflowHeaderService: WorkflowHeaderService) {}

  ngOnInit() {
    this.workflow = this.workflowHeaderService.workflow
  }

  openScript(filename: string) {
    this.workflowHeaderService.routeScript(filename)
  }

  createScript() {
    this.workflowHeaderService.routeCreateScript()
  }

  createVideo(workflowName: string, script: string) {
    this.workflowService.createVideo(workflowName, script)
  }

  uploadVideo(workflowName: string, filename: string) {
    this.workflowService.uploadVideo(workflowName, filename)
  }

}
