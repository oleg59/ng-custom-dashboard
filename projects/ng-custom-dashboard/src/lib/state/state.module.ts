import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './dashboard/dashboard.reducer';
import { configReducer } from './config/config.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(dashboardReducer),
    StoreModule.forFeature(configReducer),
  ],
  exports: [
    StoreModule
  ]
})
export class StateModule { }
