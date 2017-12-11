//
import { NgModule } from '@angular/core';

//import material modules
import {
  MatToolbarModule, MatIconModule, MatButtonModule,
  MatSelectModule, MatRadioModule, MatInputModule

} from '@angular/material';

@NgModule({
  imports:[
    MatToolbarModule, MatIconModule, MatButtonModule,
    MatSelectModule, MatRadioModule, MatInputModule
  ],
  exports:[
    MatToolbarModule, MatIconModule, MatButtonModule,
    MatSelectModule, MatRadioModule, MatInputModule
  ]
})

export class MaterialModules{}
