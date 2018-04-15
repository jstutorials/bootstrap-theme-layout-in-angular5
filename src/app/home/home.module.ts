import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule,ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared'; 

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SharedModule
  ],
  declarations: [
  	HomeComponent
  ]
})
export class HomeModule { }
