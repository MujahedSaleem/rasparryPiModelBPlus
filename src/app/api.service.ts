

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from 'environments/environment';

@Injectable()
export class ApiService {
  
  constructor(private http: HttpClient) { }

  DoConnection(data){
    return this.http.post(`${environment.api}api/relay/on`,data);
  }
}
 
