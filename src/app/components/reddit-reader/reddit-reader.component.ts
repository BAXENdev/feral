import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/RedditService/reddit.service';

@Component({
  selector: 'app-reddit-reader',
  templateUrl: './reddit-reader.component.html',
  styleUrls: ['./reddit-reader.component.scss']
})
export class RedditReaderComponent {

  constructor (public redditService: RedditService) {}

}
