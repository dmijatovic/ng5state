import { Component, OnInit, Input } from '@angular/core';

import { ThreeComService, ThreeStructure } from '../three.svc';

@Component({
  selector: 'app-three-level-1',
  templateUrl: './level.1.html',
  styleUrls: ['./level.1.scss']
})
export class ThreeLevel1Component implements OnInit {
  id:string;
  type:string;
  level:number;
  pos:number;
  name:string;
  label:string;
  items:any=[]

  @Input()
  set props(data){
    this.id = data.id;
    this.type = data.type;
    this.level = data.level;
    this.pos = data.pos;
    this.name = data.name;
    this.label = data.label;
    this.items = data.items;
    //props
    console.log(this.name,"...props...",this.items);
  }
  constructor(
    private comSvc:ThreeComService
  ) { }
  ngOnInit() {
    console.log("init...",this.name);
  }

  createGroup(){
    //console.log(this.name,"...create group");
    debugger
    this.comSvc.createGroup({
      pId: this.id,
      pLevel: this.level,
      pPos: this.pos,
      type: this.type
    });
  }

  createItem(){

    this.comSvc.createItem({
      pId: this.id,
      pLevel: this.level,
      pPos: this.pos,
      type: this.type
    });
    //console.log(this.name,"...create child...fld");

  }

  deleteMe(){
    console.log(this.name,"...delete me");
  }

}
