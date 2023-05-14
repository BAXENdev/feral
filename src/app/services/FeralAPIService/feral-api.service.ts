import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InitResponse } from 'src/app/interfaces/initResponse';
import { API_CONSTANTS } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class FeralApiService {

  initSuccess: string

  constructor(private httpClient: HttpClient) { }

  init() {
    const req = this.httpClient.post<InitResponse>(API_CONSTANTS.apiInitUrl, {})
    req.subscribe(response => this.initSuccess = response.success)
  }
}
