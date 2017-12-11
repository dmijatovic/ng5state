import { Component, OnInit } from '@angular/core';

import { ThreeDataService, ThreeComService, ThreeStructure } from '../three.svc';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-three-level-0',
  templateUrl: './level.0.html',
  styleUrls: ['./level.0.scss'],
  providers:[ ThreeDataService ]
})
export class ThreeLevel0Component implements OnInit {

  id:string="level.0.item.0.main";
  name:string="level.0.item.0.main";
  level:number=0;
  label:string="Top level component (level.0)";
  items:any=[];

  //listeners
  createGroup$:Subscription;
  createItem$:Subscription;
  updateItem$:Subscription;
  deleteItem$:Subscription;

  constructor(
    private dataSvc:ThreeDataService,
    private comSvc:ThreeComService
  ){}
  ngOnInit() {
    this.listenForCreateGroup();
    this.listenForCreateItem();
    this.listenForUpdateItem();
    this.listenForDeleteItem();
  }
  /**
   *
   */
  listenForCreateGroup(){
    this.createGroup$ = this.comSvc.createGroup$
    .subscribe((d)=>{
      if (d){
        console.log(this.name,"...create group...", d);
        this.createGroup(d);
      }
    });
  }
  createGroup(data){
    debugger
    if (data.pLevel){
      //get parent item collection
      let items:any = this.getItemsAtLevel(data.pLevel);
      if (items){
        //get parent item
        let parent = items[data.pPos];
        //create new child item
        let child = this.createThreeItem({
          type: data.type,
          level: data.pLevel + 1,
          pos: items.length
        });
        //append new item
        parent.items.push(child);
      }
    }
  }
  getItemsAtLevel(level:number){
    let items = this.items
    for(let i=1; i<level; i++){
      items = items.items;
    }
    //return array
    return items;
  }
  listenForCreateItem(){
    this.createItem$ = this.comSvc.createItem$
    .subscribe((d)=>{
      if (d){
        console.log(this.name,"...create item...", d);
        this.createItem(d);
      }
    });
  }
  createItem(data){
    debugger
    if (data.pLevel){
      //get parent item collection
      let items:any = this.getItemsAtLevel(data.pLevel);
      if (items){
        //get parent item
        let parent = items[data.pPos];
        //create new child item
        let child = this.createThreeItem({
          type: data.type,
          level: data.pLevel + 1,
          pos: items.length
        });
        //append new item
        parent.items.push(child);
      }
    }
  }
  listenForUpdateItem(){
    this.updateItem$ = this.comSvc.updateItem$
    .subscribe((d)=>{
      if (d){
        console.log(this.name,"...update item...", d);
      }
    });
  }
  listenForDeleteItem(){
    this.deleteItem$ = this.comSvc.deleteItem$
    .subscribe((d)=>{
      if (d){
        console.log(this.name,"...delete item...", d);
      }
    });
  }

  /**
   * Create group item, there are 2 types possible
   * list or field
   * @param typ
   */
  createChild(typ:string){
    //console.log("level0...create child item");
    debugger

    //create new item without child structure
    let nItem = this.createThreeItem({
      type:typ,
      level:this.level + 1,
      pos:this.items.length
    });

    if (typ == 'list'){
      let item = this.createThreeItem({
        pos:0,
        type: "fld",
        level: nItem.level + 1
      });
      //add new item
      nItem.items.push(item);

      item = this.createThreeItem({
        pos:1,
        type: "agg",
        level: nItem.level + 1
      });
    }else{
      //filter only
      let item = this.createThreeItem({
        pos:0,
        type: "fld",
        level: nItem.level + 1
      });
      //add new item
      nItem.items.push(item);
    }

    //append new item to collection
    this.items.push(nItem);
  }
  /**
   * Create new Three item
   * @param type
   * @param level
   * @param pos
   */
  createThreeItem({type, level, pos}){
    let newItem={
      id:`level.${level}.item.${pos}.${type}`,
      pos: pos,
      level: level,
      type: type,
      name: `level.${level}.item.${pos}.${type}`,
      label:`This is my ${type} item at level ${level} and position ${pos}`,
      items:[]
    }
    //return new item
    return newItem;
  }

  deleteAllItems(){
    console.log("level0...delete all items");
    //just remove all items
    this.items = [];
  }

}
