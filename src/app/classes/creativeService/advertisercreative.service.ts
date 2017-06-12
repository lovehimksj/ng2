import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {AdvertiserCreative} from './advertiser-creative';
// import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class AdvertiserCreativeService {
  private creativeUrl = 'https://ads.uahoy.in/bi/getarc/?&aid=1&access_token=231bf608-b3ee-4635-b871-13f5de761925';

  constructor(private http: Http) {
  }

  getAdvertiserCreative(): Observable<AdvertiserCreative[]> {
    return this.http.get(this.creativeUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    let resList = [];
    for (let i in body.advertiserRawCreatives) {
      resList.push(body.advertiserRawCreatives[i]);
    }
    return resList || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
