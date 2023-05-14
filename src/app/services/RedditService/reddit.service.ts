import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REDDIT_API_CONSTANTS } from 'src/app/config/constants';
import { Subreddit } from 'src/app/interfaces/redditService/subreddit';
import { SubredditList } from 'src/app/interfaces/redditService/subreddit-list';
import { PostList } from 'src/app/interfaces/redditService/post-list';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private httpClient: HttpClient) {}

  getSubreddits() {
    const req = this.httpClient.get<SubredditList>(REDDIT_API_CONSTANTS.apiRedditSubredditsUrl)
    // let subreddits: Subreddit[] = []
    // req.subscribe(response => subreddits = response.subreddits)
    // return subreddits
    return req
  }

  getPostsFromSubreddit(subredditUrl: string, limit: number, where: string, after: string) {
    let req = this.httpClient.get<PostList>(REDDIT_API_CONSTANTS.apiRedditPostsFromSubredditUrl, {params:{"subreddit":subredditUrl, "limit":limit, "where":where, "after":after}})
    return req
  }

  getSearchSubreddits(query: string, limit: number, after: string) : Observable<SubredditList> {
    let req = this.httpClient.get<SubredditList>(REDDIT_API_CONSTANTS.apiRedditSearchSubredditsUrl, {params:{"query":query, "limit":limit, "after":after}})
    return req
  }
}
