import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//import { WikiListSettings} from './index';
import { Item } from './item';

@Injectable()
export class WikiListService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private itemsUrl: string = 'http://api.ironbou.com/languages';
  constructor(
    private http: Http) {
      console.log('3333:WikiListService');
  } 

  ngOnInit(): void {
  }

/*  getItems(): Observable<Item[]> {
    return this.http.get('./data/json/wiki.json').map((res:Response) => res.json());
  }*/


   getItems(): Observable<Item[]> {
//    this.itemsUrl = WikiListSettings.api_endpoint + 'profileelements';
    var endpoint = this.itemsUrl;
    return this.http.get(endpoint, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

    getItem(id: number): Observable<Item> {
    var endpoint = this.itemsUrl + '/' + id;
    return this.http.get(endpoint, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addItem(name: string): Observable<Item> {
    var item = new Item;
    item.name = 'new element';
    let body = JSON.stringify(item);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.itemsUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteItem(id: number): Observable<Item[]> {
    return this.http.delete(this.itemsUrl + '/' + id, this.options)
      .map(() => null)
      .catch(this.handleError);
  }

  updateItem(body: Object, id: number): Observable<Item[]> {
    let bodyString = JSON.stringify(body);
    return this.http.put(`${this.itemsUrl}/` + id, body, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }


}

