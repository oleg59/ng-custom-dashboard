import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage/storage.service';
import { DashboardItem } from '../models/dashboard.model';
import { Widget } from '../models/widget.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _dashboard$: BehaviorSubject<DashboardItem[]> = new BehaviorSubject<DashboardItem[]>([]);

  constructor(private storageService: StorageService) {}

  getDashboard(): Observable<DashboardItem[]> {
    this._dashboard$.next(this.storageService.getData<DashboardItem[]>('dashboard') ?? []);
    return this._dashboard$.asObservable();
  }

  addWidget(widget: Widget) {
    const dashboard = this._dashboard$.getValue();

    const newWidget: DashboardItem = {
      id: Symbol('DashboardItemId'),
      cols: 2,
      rows: 1,
      y: 0,
      x: 0,
      widget,
    };

    this.setDashboard([...dashboard, newWidget]);
  }

  removeWidget(id: symbol) {
    const dashboard = this._dashboard$.getValue();
    this.setDashboard(dashboard.filter((widget) => widget.id !== id));
  }

  private setDashboard(dashboard: DashboardItem[]) {
    this.storageService.setData('dashboard', dashboard);
    this._dashboard$.next(dashboard);
  }
}
