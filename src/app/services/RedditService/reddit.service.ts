import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { API_CONSTANTS } from 'src/app/config/constants';
import { Subreddit } from 'src/app/interfaces/RedditService/subreddit';
import { SubredditList } from 'src/app/interfaces/RedditService/subreddit-list';
import { InitResponse } from 'src/app/interfaces/initResponse';
import { PostList } from 'src/app/interfaces/redditService/post-list';
import { SubredditList } from 'src/app/interfaces/redditService/subreddit-list';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  initSuccess: string

  constructor(private httpClient: HttpClient) {
    const req = httpClient.post<InitResponse>(API_CONSTANTS.apiInitUrl, {})
    req.subscribe(response => this.initSuccess = response.success)
  }

  getSubreddits() {
    const req = this.httpClient.get<SubredditList>(API_CONSTANTS.apiRedditSubredditsUrl)
    let subreddits: Subreddit[] = []
    req.subscribe(response => subreddits = response.subreddits)
    return subreddits
  }

  getPostsFromSubreddit(subredditUrl: string, limit: number, where: string, after: string) {
    let req = this.httpClient.get<PostList>(API_CONSTANTS.apiRedditPostsFromSubredditUrl, {params:{"subreddit":subredditUrl, "limit":limit, "where":where, "after":after}})
    return req
  }

  getSearchSubreddits(query: string, limit: number, after: string) : Observable<SubredditList> {
    let req = this.httpClient.get<SubredditList>(API_CONSTANTS.apiRedditSearchSubredditsUrl, {params:{"query":query, "limit":limit, "after":after}})
      // .pipe(map(response => {
      //   return response
      // }))
    return req
  }
}
