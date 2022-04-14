import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { WeeklyBasicSubscriptionComponent } from './subscription/weekly-basic-subscription/weekly-basic-subscription.component';
import { WeeklyPremiumSubscriptionComponent } from './subscription/weekly-premium-subscription/weekly-premium-subscription.component';
import { WeeklyCustomSubscriptionComponent } from './subscription/weekly-custom-subscription/weekly-custom-subscription.component';
import { MonthlyBasicSubscriptionComponent } from './subscription/monthly-basic-subscription/monthly-basic-subscription.component';
import { MonthlyPremiumSubscriptionComponent } from './subscription/monthly-premium-subscription/monthly-premium-subscription.component';
import { MonthlyCustomSubscriptionComponent } from './subscription/monthly-custom-subscription/monthly-custom-subscription.component';
import { OnDemandBasicComponent } from './on-demand/on-demand-basic/on-demand-basic.component';
import { OnDemandPremiumComponent } from './on-demand/on-demand-premium/on-demand-premium.component';
import { OnDemandCustomComponent } from './on-demand/on-demand-custom/on-demand-custom.component';
import { AdminTrackerComponent } from './admin-tracker/admin-tracker.component';
import { UserTrackerComponent } from './user-tracker/user-tracker.component';
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    HomeComponent,
    WeeklyBasicSubscriptionComponent,
    WeeklyPremiumSubscriptionComponent,
    WeeklyCustomSubscriptionComponent,
    MonthlyBasicSubscriptionComponent,
    MonthlyPremiumSubscriptionComponent,
    MonthlyCustomSubscriptionComponent,
    OnDemandBasicComponent,
    OnDemandPremiumComponent,
    OnDemandCustomComponent,
    AdminTrackerComponent,
    UserTrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule.forRoot({ duration: 2000 }),
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
