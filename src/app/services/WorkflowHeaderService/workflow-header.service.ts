import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Workflow } from 'src/app/interfaces/workflowService/workflow';

@Injectable({
  providedIn: 'root'
})
export class WorkflowHeaderService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  workflow: Workflow | null
  filename: string | null
  private rootRoute = this.activatedRoute.root

  private observer = new Subject()
  public subscriber$ = this.observer.asObservable()

  // emitData(data) {
  //   this.observer.next(data)
  // }

  routeWorkflow(workflow: Workflow) {
    this.workflow = workflow
    this.filename = null
    this.router.navigateByUrl("workflows/workflow")
      // .then(value => console.log("Navigated: ", value))
      // .catch(reason => console.log("Error: ", reason))
  }

  routeCurrentWorkflow() {
    this.router.navigateByUrl("workflows/workflow")
      // .then(value => console.log("Navigated: ", value))
      // .catch(reason => console.log("Error: ", reason))
  }
  routeHome() {
    this.router.navigateByUrl("workflows")
      // .then(value => console.log("Navigated: ", value))
      // .catch(reason => console.log("Error: ", reason))
  }

  routeScript(filename: string) {
    this.filename = filename
    this.router.navigateByUrl('workflows/workflow/script')
      // .then(value => console.log("Navigated: ", value))
      // .catch(reason => console.log("Error: ", reason))
  }

  routeCreateScript () {
    this.router.navigateByUrl('workflows/workflow/createRedditScript')
  }
}
