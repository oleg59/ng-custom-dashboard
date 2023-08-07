import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WidgetsService } from '../../common/services/widgets.service';
import { Widget } from '../../common/models/widget.model';

@Component({
  selector: 'ngcd-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[] | undefined;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.widgets = this.widgetsService.getWidgets();
  }
}
