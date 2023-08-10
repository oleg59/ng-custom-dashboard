import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetsService } from '../../common/services/widgets.service';
import { DashboardItem, DashboardWidget } from '../../common/models/dashboard.model';
import { WidgetType } from '../../common/types/widget.type';
import { Store } from '@ngrx/store';
import { selectIsRemovalMod } from '../../state/dashboard/dashboard.selectors';
import { DashboardActions } from '../../state/dashboard/dashboard.actions';

@Component({
  selector: 'ngcd-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements AfterViewInit {
  @Input({ required: true }) dashboardItem!: DashboardItem;
  isRemovalMod$ = this.store.select(selectIsRemovalMod);

  @ViewChild('componentPlaceholder', { read: ViewContainerRef }) componentPlaceholder!: ViewContainerRef;

  constructor(
    private widgets: WidgetsService,
    private cd: ChangeDetectorRef,
    private readonly store: Store,
  ) {}

  ngAfterViewInit(): void {
    if (this.dashboardItem.widget.code) {
      const widget = this.widgets.getWidgetByCode(this.dashboardItem.widget.code);

      if (widget) {
        this.loadComponent(widget.component, widget.props);
      }
    }
  }

  loadComponent(component: Type<WidgetType>, props?: DashboardWidget['props']) {
    const viewContainerRef = this.componentPlaceholder;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(component);
    componentRef.instance.props = props;

    this.cd.markForCheck();
  }

  removeWidget(id: DashboardItem['id']) {
    this.store.dispatch(DashboardActions.removeWidget({ id }));
  }
}
