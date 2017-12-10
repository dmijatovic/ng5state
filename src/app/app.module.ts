import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//material modules 
import { MaterialModules } from '../material/material.module'

//Three module
import { ThreeModule } from './three/three.module';

//Main app component
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MaterialModules, ThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
