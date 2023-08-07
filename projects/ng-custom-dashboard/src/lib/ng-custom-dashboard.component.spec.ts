import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomDashboardComponent } from './ng-custom-dashboard.component';

describe('NgCustomDashboardComponent', () => {
  let component: NgCustomDashboardComponent;
  let fixture: ComponentFixture<NgCustomDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgCustomDashboardComponent],
    });
    fixture = TestBed.createComponent(NgCustomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
