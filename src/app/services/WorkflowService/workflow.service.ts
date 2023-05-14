
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkflowLog } from 'src/app/interfaces/workflowService/workflow-log';
import { WORKFLOW_CONSTANTS } from 'src/app/config/constants';
import { Workflow } from 'src/app/interfaces/workflowService/workflow';
import { Script } from 'src/app/interfaces/workflowService/script';
import { Post } from 'src/app/interfaces/redditService/post';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private httpClient: HttpClient) {}

  postNewWorkflow() {

  }

  getWorkflowLog() {
    let req = this.httpClient.get<WorkflowLog>(WORKFLOW_CONSTANTS.apiWorkflowLogUrl)
    return req
  }

  getWorkflowScript(workflowName: string, filename: string) {
    let req = this.httpClient.get<Script>(WORKFLOW_CONSTANTS.apiWorkflowUrl, {params:{}})
    return req
  }

  writeWorkflowScript(workflowName: string, post: Post) {
    let fileContent = {"title":post.title, "author":post.author, "content":post.selftext}
    let filename = post.title.replace(" ", "")
    let req = this.httpClient.post<Script>(WORKFLOW_CONSTANTS.apiWorkflowUrl, fileContent, {params:{"filetype":"json", "workflow":workflowName,"filename":filename}})
    req.subscribe()
  }

  createVideo(workflowName: string, script: string) {
    let req = this.httpClient.post<Script>(WORKFLOW_CONSTANTS.apiVideoEditorUrl, '', {params:{"workflowName":workflowName,"script":script}})
    req.subscribe()
  }

  uploadVideo(workflowName: string, filename: string) {
    let req = this.httpClient.post<Script>(WORKFLOW_CONSTANTS.apiVideoUploaderUrl, '', {params:{"workflowName":workflowName,"filename":filename}})
    req.subscribe()
  }
}
