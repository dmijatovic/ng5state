//
import { NgModule } from '@angular/core';

//import material modules 
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports:[MatToolbarModule, MatIconModule, MatButtonModule],
  exports:[MatToolbarModule, MatIconModule, MatButtonModule]
})
export class MaterialModules{}