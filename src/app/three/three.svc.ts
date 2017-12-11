import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * This service is to be used to make api
 * calls to backend and save/retreieve
 * CRUD operations
 */
@Injectable()
export class ThreeDataService {
  constructor() { }

}

/**
 * This service is used for communication
 * between the components
 */
@Injectable()
export class ThreeComService {
  constructor() { }

  //new three group
  group = new BehaviorSubject<object>(null);
  createGroup$ = this.group.asObservable();
  createGroup(data){

    this.group.next(data);

  }

  item = new BehaviorSubject<object>(null);
  createItem$ = this.item.asObservable();
  createItem(data){

    this.item.next(data);

  }

  update = new BehaviorSubject<object>(null);
  updateItem$ = this.update.asObservable();
  upateItem(data){

    this.update.next(data);

  }


  delete = new BehaviorSubject<object>(null);
  deleteItem$ = this.delete.asObservable();
  deleteItem(data){

    this.delete.next(data);

  }

}

/**
 * Basic three structure
 */
export interface ThreeStructure{
  //key made from item level and position
  //like so: level.1.pos.1
  id:string;
  level:number;
  pos:number;
  type:string;
  name:string;
  label:string;
  items:any[];
}

/**
 * Field list from backend
 */
export const fields=[
  {value:'field.1', label:'Field 1'},
  {value:'field.2', label:'Field 2'},
  {value:'field.3', label:'Field 3'},
  {value:'field.4', label:'Field 4'}
]


export const operators=[
  {value:'operator.1', label:'='},
  {value:'operator.2', label:'>'},
  {value:'operator.3', label:'<'},
  {value:'operator.4', label:'IN'}
]

export const funcs=[
  {value:'func.1', label:'Function 1'},
  {value:'func.2', label:'Function 2'},
  {value:'func.3', label:'Function 3'},
  {value:'func.4', label:'Function 4'}
]

