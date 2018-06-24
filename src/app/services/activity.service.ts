import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: Http) { }

  getData(): Promise<any[]> {
    return this.http.get('./assets/data.json')
      .toPromise()
      .then(response => response.json() as any[]);
  }
}
