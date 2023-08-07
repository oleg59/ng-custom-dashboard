import { Widget } from '../../common/models/widget.model';
import { DateTimeWidgetComponent } from './date-time.component';

export interface TimeWidgetProps {
  format?: string;
}

export const timeWidgetConfig: Widget<TimeWidgetProps> = {
  code: 'time',
  name: 'Time',
  component: DateTimeWidgetComponent,
};

export const dateWidgetConfig: Widget<TimeWidgetProps> = {
  code: 'date',
  name: 'Date',
  component: DateTimeWidgetComponent,
  props: {
    format: 'dd.MM.yyyy',
  },
};
