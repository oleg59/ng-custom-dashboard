import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeWidgetModule } from './date-time/date-time.module';

@NgModule({
  imports: [CommonModule, DateTimeWidgetModule],
})
export class WidgetsModule {}
