import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { NgCustomDashboardComponent } from './ng-custom-dashboard.component';
import { StoreModule } from '@ngrx/store';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [NgCustomDashboardComponent],
  imports: [
    CommonModule,
    GridsterComponent,
    GridsterItemComponent,
    StoreModule.forRoot({}),
    StateModule
  ],
  exports: [NgCustomDashboardComponent]
})
export class NgCustomDashboardModule { }
