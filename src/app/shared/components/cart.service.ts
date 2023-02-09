import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // public cartData$: Observable<any>;
  public cartData: Subject<any> = new Subject();
  constructor() {
    // this.cartData$ = this.cartData.asObservable();
  }
}
