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
@NgModule({
  declarations: [
    OverviewComponent,
    AreaComponent,
    ReportComponent,
    TrendsComponent,
    SettingsComponent,
    GasBalanceComponent, // ✅ include this
  ],
  imports: [
    CommonModule, // ✅ Correct for feature modules
    MainRoutingModule,
    NgApexchartsModule,
    NgxOrgChartModule, // ✅ Correctly imported
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
