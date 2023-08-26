import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DisplayGrid, GridType, GridsterConfig } from 'angular-gridster2';
import { Observable } from 'rxjs';
import { DashboardItem } from './common/models/dashboard.model';
import { DashboardService } from './common/services/dashboard.service';

@Component({
  selector: 'ng-custom-dashboard',
  templateUrl: './ng-custom-dashboard.component.html',
  styleUrls: ['./ng-custom-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgCustomDashboardComponent {
  options: GridsterConfig = {
    gridType: GridType.Fixed,
    minCols: 22,
    maxCols: 100,
    fixedRowHeight: 55,
    fixedColWidth: 55,
    displayGrid: DisplayGrid.OnDragAndResize,
    draggable: {
      enabled: false,
    },
    resizable: {
      enabled: false,
    },
  };
  dashboard$: Observable<DashboardItem[]> | undefined = this.dashboardService.getDashboard();

  constructor(private dashboardService: DashboardService) {}
}
