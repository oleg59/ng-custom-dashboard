import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WidgetsService } from '../../common/services/widgets.service';
import { Widget } from '../../common/models/widget.model';
import { DashboardActions } from '../../state/dashboard/dashboard.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngcd-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[] | undefined;

  constructor(
    private widgetsService: WidgetsService,
    private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.widgets = this.widgetsService.getWidgets();
  }

  addWidget(widget: Widget) {
    this.store.dispatch(DashboardActions.addWidget({ widget }));
  }
}
