import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Buffer } from 'buffer';
import { AuthResponse } from '../interfaces/redditService/auth-response';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  private clientId = '5Q6jwbqY3JvsMEGLPJgcTQ';
  private clientSecret = 'U4AZb0HDTJDhpIS2QX8VsHaz__olGg';
  private authURL = '/redditAuth';
  authToken = '';
  accessToken = '';
  private redditApiUrl = 'https://oauth.reddit.com/';

  constructor(private http: HttpClient) {
    this.authToken = Buffer.from(this.clientId + ':' + this.clientSecret).toString('base64')
    // this.getToken()
    
  }

  getToken () {
    this.accessToken = 'Access Tokens: '
    let headers = new HttpHeaders()
    headers.append('Authorization', 'Basic ' + this.authToken)
    headers.append('User-Agent', 'AutoPost/0.0.1 by BAXEN')
    let body = {
      'grant_type': 'client_credentials'
    }
    let params = new HttpParams()
    // params.append()
    let response = this.http.post<AuthResponse>(this.authURL, body, {headers})

    // let response = this.http.post<AuthResponse>(
    //   this.authURL, 
    //   {'grant_type': 'client_credentials'}, 
    //   { headers: new HttpHeaders({
    //     'Authorization': 'Basic ' + this.authToken
    //   })
    // })

    response.subscribe((resp) => {this.accessToken += resp.access_token})
  }

  getTokenJsonp () {
    let response = this.http.jsonp<AuthResponse>(this.authURL, '')
  }


}
