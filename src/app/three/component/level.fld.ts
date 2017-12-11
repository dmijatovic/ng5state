import { Component, OnInit, Input } from '@angular/core';

import { ThreeComService, fields, operators } from '../three.svc';

@Component({
  selector: 'app-three-level-fld',
  templateUrl: './level.fld.html',
  styleUrls: ['./level.fld.scss']
})
export class ThreeLevelFldComponent implements OnInit {
  type:string="fld";
  id:string;
  level:number;
  pos:number;
  name:string;
  label:string;
  //list of fileds to use
  fields = fields;
  //list of operators to use
  operators = operators;

  //results
  fieldName:string;
  operatorName:string;
  fieldVal:string;


  @Input()
  set props(data){
    this.id = data.id;
    this.level = data.level;
    this.pos = data.pos;
    this.name = data.name;
    this.label = data.label;
    //data
    this.fieldName = data.funcName;
    this.operatorName = data.operatorName;
    this.fieldVal = data.funcVal;
  }
  constructor(
    private comSvc:ThreeComService
  ) { }
  ngOnInit() { }

  deleteMe(){
    //delete this item
    this.comSvc.deleteItem({
      id: this.id,
      level: this.level,
      pos: this.pos
    });
  }
}
