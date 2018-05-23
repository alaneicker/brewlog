import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  request(config): Promise<any> {
    return this.http
      [config.type || 'get'](config.url, { responseType: config.responseType || 'json' }, config.data)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: HttpResponse<Object>) {
    const body = res;
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
