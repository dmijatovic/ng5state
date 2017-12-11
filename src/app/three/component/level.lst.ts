import { Component, OnInit, Input } from '@angular/core';

import { ThreeComService, funcs,fields, operators } from '../three.svc';

@Component({
  selector: 'app-three-level-lst',
  templateUrl: './level.lst.html',
  styleUrls: ['./level.lst.scss']
})
export class ThreeLevelLstComponent implements OnInit {
  type:string="list";
  id:string;
  level:number;
  pos:number;
  name:string;
  label:string;

  //results
  fld:any;
  agg:any;

  @Input()
  set props(data){
    this.id = data.id;
    this.level = data.level;
    this.pos = data.pos;
    this.name = data.name;
    this.label = data.label;
    //data
    debugger
    this.fld = data.items[0];
    this.agg = data.items[1];
  }
  constructor(
    private comSvc:ThreeComService
  ){}
  ngOnInit() { }

  deleteMe(){
    console.log("level2...delete me");
  }

}
