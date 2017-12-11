import { Component, OnInit, Input } from '@angular/core';

import { ThreeComService, funcs, operators } from '../three.svc';

@Component({
  selector: 'app-three-level-agg',
  templateUrl: './level.agg.html',
  styleUrls: ['./level.agg.scss']
})
export class ThreeLevelAggComponent implements OnInit {
  type:string="agg";
  id:string;
  level:number;
  pos:number;
  name:string;
  label:string;
  //list of fileds to use
  funcs = funcs;
  //list of operators to use
  operators = operators;

  //results
  funcName:string;
  operatorName:string;
  funcVal:string;

  @Input()
  set props(data){
    this.id = data.id;
    this.level = data.level;
    this.pos = data.pos;
    this.name = data.name;
    this.label = data.label;
    //data
    this.funcName = data.funcName;
    this.operatorName = data.operatorName;
    this.funcVal = data.funcVal;
  }
  constructor(
    private comSvc:ThreeComService
  ){}
  ngOnInit() { }

  deleteMe(){
    console.log("level2...delete me");
  }

}
