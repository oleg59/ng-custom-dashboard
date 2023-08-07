import { Directive, Input } from '@angular/core';

@Directive()
export abstract class WidgetType<PropsType = unknown> {
  @Input() props: PropsType | undefined;
}
