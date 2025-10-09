import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MainRoutingModule } from './main-routing.module';

import { OverviewComponent } from './Overviwe/overview.component';
import { AreaComponent } from './Area/area.component';
import { ReportComponent } from './Report/compressors.component';
import { TrendsComponent } from './Trends/trends.component';
import { SettingsComponent } from './settings/settings.component';
import { GasBalanceComponent } from './Gas_balance/gas_balance.component'; // ✅ add your org-chart component here
import { NgxOrgChartModule } from 'ngx-org-chart';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Cob11Component } from './Gas_balance/cob11/cob11.component';
import { BfComponent } from './Gas_balance/bf/bf.component';
@NgModule({
  declarations: [
    OverviewComponent,
    AreaComponent,
    ReportComponent,
    TrendsComponent,
    SettingsComponent,
    GasBalanceComponent,
    Cob11Component,
    BfComponent, // ✅ include this
  ],
  imports: [
    CommonModule, // ✅ Correct for feature modules
    MainRoutingModule,
    NgApexchartsModule,
    NgxOrgChartModule, // ✅ Correctly imported
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
