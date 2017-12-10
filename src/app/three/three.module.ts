import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//local components
import { 
  ThreeLevel0Component, 
  ThreeLevel1Component } from './component/';

import { MaterialModules } from '../../material/material.module'
//services
import { ThreeComService } from './three.svc';

@NgModule({
  imports: [
    CommonModule, MaterialModules
  ],
  declarations: [ 
    ThreeLevel0Component, ThreeLevel1Component
  ],
  exports:[
    ThreeLevel0Component, ThreeLevel1Component
  ],
  providers:[ ThreeComService ]
})
export class ThreeModule { }
