import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgCustomDashboardModule } from 'ng-custom-dashboard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgCustomDashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
