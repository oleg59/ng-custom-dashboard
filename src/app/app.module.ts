import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgCustomDashboardModule } from 'ng-custom-dashboard';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgCustomDashboardModule, StoreDevtoolsModule.instrument()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
