import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTrackerComponent } from './admin-tracker/admin-tracker.component';
import { HomeComponent } from './home/home.component';
import { OnDemandBasicComponent } from './on-demand/on-demand-basic/on-demand-basic.component';
import { OnDemandCustomComponent } from './on-demand/on-demand-custom/on-demand-custom.component';
import { OnDemandPremiumComponent } from './on-demand/on-demand-premium/on-demand-premium.component';
import { MonthlyBasicSubscriptionComponent } from './subscription/monthly-basic-subscription/monthly-basic-subscription.component';
import { MonthlyCustomSubscriptionComponent } from './subscription/monthly-custom-subscription/monthly-custom-subscription.component';
import { MonthlyPremiumSubscriptionComponent } from './subscription/monthly-premium-subscription/monthly-premium-subscription.component';
import { WeeklyBasicSubscriptionComponent } from './subscription/weekly-basic-subscription/weekly-basic-subscription.component';
import { WeeklyCustomSubscriptionComponent } from './subscription/weekly-custom-subscription/weekly-custom-subscription.component';
import { WeeklyPremiumSubscriptionComponent } from './subscription/weekly-premium-subscription/weekly-premium-subscription.component';
import { SurveyComponent } from './survey/survey.component';
import { UserTrackerComponent } from './user-tracker/user-tracker.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'survey', component: SurveyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'on-demand-basic', component: OnDemandBasicComponent },
  { path: 'on-demand-premium', component: OnDemandPremiumComponent },
  { path: 'on-demand-custom', component: OnDemandCustomComponent },
  { path: 'weekly-basic', component: WeeklyBasicSubscriptionComponent },
  { path: 'weekly-premium', component: WeeklyPremiumSubscriptionComponent },
  { path: 'weekly-custom', component: WeeklyCustomSubscriptionComponent },
  { path: 'monthly-basic', component: MonthlyBasicSubscriptionComponent },
  { path: 'monthly-premium', component: MonthlyPremiumSubscriptionComponent },
  { path: 'monthly-custom', component: MonthlyCustomSubscriptionComponent },
  { path: 'admin/track', component: AdminTrackerComponent },
  { path: 'user/track', component: UserTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
