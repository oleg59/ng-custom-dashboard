import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngcd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  isOpenWidgets = false;

  toglleWidgets() {
    this.isOpenWidgets = !this.isOpenWidgets;
  }
}
