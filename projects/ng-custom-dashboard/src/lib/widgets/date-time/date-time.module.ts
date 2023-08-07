import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeWidgetComponent } from './date-time.component';
import { dateWidgetConfig, timeWidgetConfig } from './date-time.widget';
import { WIDGETS } from '../../common/services/widgets.service';

@NgModule({
  declarations: [DateTimeWidgetComponent],
  imports: [CommonModule],
  providers: [
    { provide: WIDGETS, useValue: timeWidgetConfig, multi: true },
    { provide: WIDGETS, useValue: dateWidgetConfig, multi: true },
  ],
})
export class DateTimeWidgetModule {}
