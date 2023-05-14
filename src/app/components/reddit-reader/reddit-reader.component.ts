import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/redditService/post';
import { PostList } from 'src/app/interfaces/redditService/post-list';
import { SubredditList } from 'src/app/interfaces/redditService/subreddit-list';
import { RedditService } from 'src/app/services/RedditService/reddit.service';
import { WorkflowHeaderService } from 'src/app/services/WorkflowHeaderService/workflow-header.service';
import { WorkflowService } from 'src/app/services/WorkflowService/workflow.service';

@Component({
  selector: 'app-reddit-reader',
  templateUrl: './reddit-reader.component.html',
  styleUrls: ['./reddit-reader.component.scss']
})
export class RedditReaderComponent {

  subredditList?: SubredditList
  postList?: PostList

  // posts: PostList

  constructor (private redditService: RedditService, private workflowService: WorkflowService, 
    private workflowHeaderService: WorkflowHeaderService) {
    
  }

  search (query: string) {
    let req = this.redditService.getSearchSubreddits(query, 3, '')
    req.subscribe(response => this.subredditList = response)
  }

  posts (subreddit: string, where: string) {
    let req = this.redditService.getPostsFromSubreddit(subreddit, 3, where, '')
    req.subscribe(response => this.postList = response)
  }

  writeScript (post: Post) {
    let workflowName = this.workflowHeaderService.workflow?.workflowName || ""
    this.workflowService.writeWorkflowScript(workflowName, post)
    this.workflowHeaderService.routeHome()
  }
}
