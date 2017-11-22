import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from './product';
@Injectable()
export class InventoryService {
  private _inventoryUrl = "https://biller-bab9a.firebaseio.com/StoreInfo";
  constructor(private _http:Http) { }
getShop():Observable<IProduct[]>{
  return this._http.get(this._inventoryUrl)
  .map((response:Response)=> <IProduct[]>response.json())
  .do(console.log)
  .catch(this.handleError);
}
private handleError(error: Response){
  console.error(error);
  return Observable.throw(error.json().error || 'servererror');
}
}
