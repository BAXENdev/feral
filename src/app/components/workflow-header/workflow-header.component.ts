import { Component } from '@angular/core';
import { WorkflowHeaderService } from 'src/app/services/WorkflowHeaderService/workflow-header.service';

@Component({
  selector: 'app-workflow-header',
  templateUrl: './workflow-header.component.html',
  styleUrls: ['./workflow-header.component.scss']
})
export class WorkflowHeaderComponent {
  constructor (workflowHeaderService: WorkflowHeaderService) {}
}
