import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

@Component({
  selector: 'app-gas_balance',
  templateUrl: './gas_balance.component.html',
  styleUrls: ['./gas_balance.component.scss'],
})
export class GasBalanceComponent implements OnInit {
  ngOnInit(): void { }
  selectedComponent: string = 'cob11'; // default

  switchComponent(component: string) {
    this.selectedComponent = component;
    console.log(component);

  }
}
