import { ContentChild, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { CONSTANTS } from '../config/constants'

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  private redditApiUrl: string;

  constructor () {
    this.redditApiUrl = CONSTANTS.redditApiUrl
  }

}
