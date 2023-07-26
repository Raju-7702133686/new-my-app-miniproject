import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  public count: number = 0;
  public countSub: BehaviorSubject<any> = new BehaviorSubject(0);


  setValue(){
    this.countSub.next(this.count++);
  }

  getValue(){
   return this.countSub.asObservable();
  }

  constructor() { }
}
