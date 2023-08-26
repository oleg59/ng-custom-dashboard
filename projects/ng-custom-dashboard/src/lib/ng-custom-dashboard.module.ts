import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { NgCustomDashboardComponent } from './ng-custom-dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WidgetsModule } from './widgets/widgets.module';
import { NGCDCommonModule } from './common/common.module';

@NgModule({
  declarations: [NgCustomDashboardComponent],
  imports: [CommonModule, GridsterComponent, GridsterItemComponent, DashboardModule, WidgetsModule, NGCDCommonModule],
  exports: [NgCustomDashboardComponent],
})
export class NgCustomDashboardModule {}
