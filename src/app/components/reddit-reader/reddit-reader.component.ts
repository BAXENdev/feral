import { Component } from '@angular/core';
import { Subreddit } from 'src/app/interfaces/RedditService/subreddit';
import { RedditService } from 'src/app/services/RedditService/reddit.service';

@Component({
  selector: 'app-reddit-reader',
  templateUrl: './reddit-reader.component.html',
  styleUrls: ['./reddit-reader.component.scss']
})
export class RedditReaderComponent {

  subreddits: Subreddit[] = []

  constructor (private redditService: RedditService) {}

  getSubreddits() {
    this.subreddits = this.redditService.getSubreddits()
  }

}
