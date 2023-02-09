import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  private clientId = '5Q6jwbqY3JvsMEGLPJgcTQ';
  private clientSecret = 'U4AZb0HDTJDhpIS2QX8VsHaz__olGg';
  private authURL = 'https://www.reddit.com/api/v1/access_token';
  authToken = '';
  private redditApiUrl = 'https://oauth.reddit.com/';

  constructor(private http: HttpClient) {}

  ngOnInit () {
    this.authToken = Buffer.from(this.clientId + ':' + this.clientSecret, 'base64').toString('base64')
    let response = this.http.post<JSON>(
      this.authURL, 
      {'grant_type': 'client_credentials'}, 
      { headers: new HttpHeaders({
        'User-Agent': 'AutoPost/0.1 by BAXEN',
        'Authorization': 'basic ' + this.authToken
      }) 
    })
    console.log(this.authToken)
  }
}
