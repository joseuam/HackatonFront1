import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiverJsonServiceService {

  private listSource = new BehaviorSubject<any[]>([]);

  $getListSource = this.listSource.asObservable();

  constructor() { }

  sendListSource(list: any[]){
    this.listSource.next(list);
  }
}
