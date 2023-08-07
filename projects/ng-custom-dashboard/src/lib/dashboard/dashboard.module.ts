import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [WidgetComponent, ToolbarComponent, WidgetsComponent],
  imports: [CommonModule],
  exports: [WidgetComponent, ToolbarComponent],
})
export class DashboardModule {}
