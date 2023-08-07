import { AfterViewInit, Component, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetsService } from '../../common/services/widgets.service';
import { DashboardWidget } from '../../common/models/dashboard.model';
import { WidgetType } from '../../common/types/widget.type';

@Component({
  selector: 'ngcd-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements AfterViewInit {
  @Input() widget: DashboardWidget | undefined;
  @Input() index: number | undefined;

  @ViewChild('componentPlaceholder', { read: ViewContainerRef }) componentPlaceholder!: ViewContainerRef;

  constructor(private widgets: WidgetsService) {}

  ngAfterViewInit(): void {
    if (this.widget?.code) {
      const widget = this.widgets.getWidgetByCode(this.widget.code);

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
  }
}
