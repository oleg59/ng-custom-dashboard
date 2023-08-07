import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TimeService } from '../../common/services/time.service';
import { TimeWidgetProps } from './date-time.widget';
import { WidgetType } from '../../common/types/widget.type';

@Component({
  selector: 'ngcd-widget-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['date-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimeWidgetComponent extends WidgetType<TimeWidgetProps> implements OnInit {
  time$ = this.timeService.time$;
  format: string | undefined;

  constructor(private timeService: TimeService) {
    super();
  }

  ngOnInit(): void {
    this.format = this.props?.format ?? 'dd:mm:ss';
  }
}
