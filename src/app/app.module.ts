import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularRoutingModule } from './angular-routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RedditReaderComponent } from './components/reddit-reader/reddit-reader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { WorkflowsComponent } from './components/workflows/workflows.component';
import { WorkflowHeaderComponent } from './components/workflow-header/workflow-header.component';
import { WorkflowPageComponent } from './components/workflow-page/workflow-page.component';
import { VideogularModule } from './videogular';
import { WorkflowVideoViewerComponent } from './components/workflow-video-viewer/workflow-video-viewer.component';
import { WorkflowScriptEditorComponent } from './components/workflow-script-editor/workflow-script-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditReaderComponent,
    WorkflowsComponent,
    WorkflowHeaderComponent,
    WorkflowPageComponent,
    WorkflowVideoViewerComponent,
    WorkflowScriptEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    VideogularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
