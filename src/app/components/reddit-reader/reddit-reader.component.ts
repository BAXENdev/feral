import { Component } from '@angular/core';
import { PostList } from 'src/app/interfaces/redditService/post-list';
import { SubredditList } from 'src/app/interfaces/redditService/subreddit-list';
import { RedditService } from 'src/app/services/RedditService/reddit.service';

@Component({
  selector: 'app-reddit-reader',
  templateUrl: './reddit-reader.component.html',
  styleUrls: ['./reddit-reader.component.scss']
})
export class RedditReaderComponent {

  subredditList?: SubredditList
  postList?: PostList

  // posts: PostList

  constructor (private redditService: RedditService) {

  }

  search (query: string) {
    let req = this.redditService.getSearchSubreddits(query, 3, '')
    req.subscribe(response => this.subredditList = response)
  }

  posts (subreddit: string, where: string) {
    let req = this.redditService.getPostsFromSubreddit(subreddit, 3, where, '')
    req.subscribe(response => this.postList = response)
  }

}
