import { Component, OnInit, Input } from '@angular/core';

import { ThreeComService } from '../three.svc';

@Component({
  selector: 'app-three-level-1',
  templateUrl: './level.1.html',
  styleUrls: ['./level.1.scss']
})
export class ThreeLevel1Component implements OnInit {
  id:string;
  name:string;
  label:string;
  items:any=[]

  @Input() 
  set props(data){
    this.id = data.id;
    this.name = data.name;
    this.label = data.label;
    this.items = data.items;
  }
  constructor(
    private comSvc:ThreeComService
  ) { }
  ngOnInit() { }

  createChild(){
    console.log("level1...create child item");
  }
  saveAllItems(){
    console.log("level1...save all items");
  }
  deleteMe(){
    console.log("level1...delete me");
  }

}
