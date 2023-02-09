import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-reddit-reader',
  templateUrl: './reddit-reader.component.html',
  styleUrls: ['./reddit-reader.component.scss']
})
export class RedditReaderComponent {
  redditService: RedditService;

  constructor (redditService: RedditService) {
    this.redditService = redditService;
    console.log("Test" + this.redditService.authToken)
  }

  ngOnInit () {
    
  }
}
