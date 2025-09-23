import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './Overviwe/overview.component';
import { AreaComponent } from './Area/area.component';
import { MainRoutingModule } from './main-routing.module';
// import { OverviewComponent } from './Gas_balance/gas_balance.component';
import { ReportComponent } from './Report/compressors.component';
import { TrendsComponent } from './Trends/trends.component';
import { Compressor1Component } from './compressor1/compressor1.component';
import { Compressor2Component } from './compressor2/compressor2.component';
import { Compressor3Component } from './compressor3/compressor3.component';
import { Compressor4Component } from './compressor4/compressor4.component';
import { Compressor5Component } from './compressor5/compressor5.component';
import { Compressor6Component } from './compressor6/compressor6.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    OverviewComponent,
    AreaComponent,
    OverviewComponent,
    ReportComponent,
    TrendsComponent,
    Compressor1Component,
    Compressor2Component,
    Compressor3Component,
    Compressor4Component,
    Compressor5Component,
    Compressor6Component,
    SettingsComponent,
  ],
  imports: [CommonModule, MainRoutingModule, NgApexchartsModule],
})
export class MainModule {}
