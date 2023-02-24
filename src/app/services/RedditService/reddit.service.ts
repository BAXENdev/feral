import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONSTANTS } from 'src/app/config/constants';
import { InitResponse } from 'src/app/interfaces/initResponse';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  init: string

  constructor(private httpClient: HttpClient) {
    const req = httpClient.post<InitResponse>(API_CONSTANTS.apiInitUrl, {})
    req.subscribe(response => this.init = response.success)
  }
}
