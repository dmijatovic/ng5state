import { Component, OnInit } from '@angular/core';

import { ThreeDataService, ThreeComService, ThreeStructure } from '../three.svc';

@Component({
  selector: 'app-three-level-0',
  templateUrl: './level.0.html',
  styleUrls: ['./level.0.scss'],
  providers:[ ThreeDataService ]
})
export class ThreeLevel0Component implements OnInit {

  id:string;
  name:string;
  label:string="Top level component (level.0)";
  items:any=[]

  constructor(
    private dataSvc:ThreeDataService,
    private comSvc:ThreeComService
  ){}
  ngOnInit() {

  }
  listenForUpdates(){

  }
  createChild(){
    console.log("level0...create child item");
    
    //create new item without child structure 
    let newItem:ThreeStructure={
      id:"level.0.item." + this.items.length,
      name:"level.0.item",
      label:"This is my level 0 item " + this.items.length,
      items:[]
    }
    //append new item to collection
    this.items.push(newItem);
  }
  saveAllItems(){
    console.log("level0...save all items");
  }
  deleteAllItems(){
    console.log("level0...delete all items");
    //just remove all items 
    this.items = [];
  }

}
