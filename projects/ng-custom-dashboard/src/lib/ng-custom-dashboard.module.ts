import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { NgCustomDashboardComponent } from './ng-custom-dashboard.component';
import { StoreModule } from '@ngrx/store';
import { StateModule } from './state/state.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { WidgetsModule } from './widgets/widgets.module';
import { metaReducers } from './state/meta-reducers';

@NgModule({
  declarations: [NgCustomDashboardComponent],
  imports: [CommonModule, GridsterComponent, GridsterItemComponent, StoreModule.forRoot({}, { metaReducers }), StateModule, DashboardModule, WidgetsModule],
  exports: [NgCustomDashboardComponent],
})
export class NgCustomDashboardModule {}
