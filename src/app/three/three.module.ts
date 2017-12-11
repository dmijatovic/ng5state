import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//local components
import {
  ThreeLevel0Component,
  ThreeLevel1Component,
  ThreeLevelFldComponent,
  ThreeLevelAggComponent,
  ThreeLevelLstComponent
 } from './component/';

import { MaterialModules } from '../../material/material.module'
//services
import { ThreeComService } from './three.svc';

@NgModule({
  imports: [
    CommonModule, MaterialModules
  ],
  declarations: [
    ThreeLevel0Component, ThreeLevel1Component, ThreeLevelFldComponent,
    ThreeLevelAggComponent, ThreeLevelLstComponent
  ],
  exports:[
    ThreeLevel0Component, ThreeLevel1Component, ThreeLevelFldComponent,
    ThreeLevelAggComponent, ThreeLevelLstComponent
  ],
  providers:[ ThreeComService ]
})
export class ThreeModule { }
