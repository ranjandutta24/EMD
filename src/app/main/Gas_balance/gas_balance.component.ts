import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gas_balance',
  templateUrl: './gas_balance.component.html',
  styleUrls: ['./gas_balance.component.scss'],
})
export class GasBalanceComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['view']) {
        this.selectedComponent = params['view'];
      }
    });
  }
  selectedComponent: string = 'cob11'; // default

  switchComponent(component: string) {
    this.selectedComponent = component;
    console.log(component);

  }
}
