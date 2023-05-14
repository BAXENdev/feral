import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WORKFLOW_CONSTANTS } from 'src/app/config/constants';
import { WorkflowHeaderService } from 'src/app/services/WorkflowHeaderService/workflow-header.service';

@Component({
  selector: 'app-workflow-video-viewer',
  templateUrl: './workflow-video-viewer.component.html',
  styleUrls: ['./workflow-video-viewer.component.scss']
})
export class WorkflowVideoViewerComponent implements OnInit {

  videoUrl: any

  constructor(private workflowHeaderService: WorkflowHeaderService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    let workflow = this.workflowHeaderService.workflow
    let filename = this.workflowHeaderService.filename
    this.videoUrl = WORKFLOW_CONSTANTS.apiWorkflowUrl + "?workflow=" + workflow?.workflowName + "&filename=" + filename
  }

}
