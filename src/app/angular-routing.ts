
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RedditReaderComponent } from "./components/reddit-reader/reddit-reader.component";
import { WorkflowPageComponent } from "./components/workflow-page/workflow-page.component";
import { WorkflowScriptEditorComponent } from "./components/workflow-script-editor/workflow-script-editor.component";
import { WorkflowVideoViewerComponent } from "./components/workflow-video-viewer/workflow-video-viewer.component";
import { WorkflowsComponent } from "./components/workflows/workflows.component";

const routes: Routes = [
    {path: '', redirectTo: 'workflows', pathMatch: 'full'},
    {path: 'workflows', component: WorkflowsComponent},
    {path: 'workflows/workflow', component: WorkflowPageComponent},
    {path: 'workflows/workflow/script', component: WorkflowScriptEditorComponent},
    {path: 'workflows/workflow/createRedditScript', component: RedditReaderComponent},
    {path: 'workflows/workflow/audio', component: WorkflowPageComponent},
    {path: 'workflows/workflow/video', component: WorkflowVideoViewerComponent},
    {path: '**', redirectTo: 'workflows', pathMatch: 'full'},
    {path: '../', redirectTo: 'workflows', pathMatch: 'full'},
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ]
})
export class AngularRoutingModule {}
