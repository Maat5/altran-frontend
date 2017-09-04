import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRequestsService {

  constructor(private http: Http) { }

  get(url) {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // extract data for each request
  private extractData(res: Response) {
    let body = res.json() || {};
    return body;
  }

  // handle error on each request
  private handleError(error: Response | any) {
    let errMsg;
    if (error instanceof Response) {
      const body = error.json() || {};
      errMsg = body;
    } else {
      errMsg = error;
    }
    return Observable.throw(errMsg);
  }

}
