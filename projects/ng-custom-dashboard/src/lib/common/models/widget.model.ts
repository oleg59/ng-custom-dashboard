import { Type } from '@angular/core';
import { WidgetType } from '../types/widget.type';

export interface Widget<PropsType = unknown> {
  code: string;
  name: string;
  component: Type<WidgetType>;
  props?: PropsType;
}
