import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardState, dashboardReducer } from './dashboard/dashboard.reducer';
import { ConfigState, configReducer } from './config/config.reducer';

export interface AppState {
  config?: ConfigState;
  dashboard?: DashboardState;
}
@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(dashboardReducer), StoreModule.forFeature(configReducer)],
  exports: [StoreModule],
})
export class StateModule {}
