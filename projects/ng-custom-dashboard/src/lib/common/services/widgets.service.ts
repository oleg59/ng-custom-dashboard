import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { Widget } from '../models/widget.model';

export const WIDGETS = new InjectionToken<Widget[]>('WIDGET');

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  constructor(@Optional() @Inject(WIDGETS) private widgets: Widget[]) {}

  getWidgets(): Widget[] {
    return this.widgets;
  }

  getWidgetByCode(code: Widget['code']): Widget | undefined {
    return this.widgets.find((w) => w.code === code);
  }
}
