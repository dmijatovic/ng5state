import { Injectable } from '@angular/core';

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

}

/**
 * Basic three structure
 */
export interface ThreeStructure{
  id:string;
  name:string;
  label:string;
  items:any[];
}