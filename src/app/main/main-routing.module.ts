import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './Overviwe/overview.component';
import { AreaComponent } from './Area/area.component';
import { ReportComponent } from './Report/compressors.component';
import { TrendsComponent } from './Trends/trends.component';
import { GasBalanceComponent } from './Gas_balance/gas_balance.component';
// import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'area', component: AreaComponent },
  { path: 'gas_balance', component: GasBalanceComponent },
  { path: 'report', component: ReportComponent },
  { path: 'trends', component: TrendsComponent },

  // { path: '**', component: NotFoundComponent },     // wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
