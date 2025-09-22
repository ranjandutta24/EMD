import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

@Component({
  selector: 'app-gas_balance',
  templateUrl: './gas_balance.component.html',
  styleUrls: ['./gas_balance.component.scss'],
})
export class GasBalanceComponent implements OnInit {
  igcaFlow: number = 0;
  igcaPresser: number = 0;
  pgcaFlow: number = 0;
  pgcaPresser: number = 0;
  AI_6_COMP1: number = 0;
  AI_6_COMP2: number = 0;
  AI_6_COMP3: number = 0;
  AI_6_COMP4: number = 0;
  AI_6_COMP5: number = 0;
  AI_6_COMP6: number = 0;

  MOTOR_CURR_COMP1: number = 0;
  MOTOR_CURR_COMP2: number = 0;
  MOTOR_CURR_COMP3: number = 0;
  MOTOR_CURR_COMP4: number = 0;
  MOTOR_CURR_COMP5: number = 0;
  MOTOR_CURR_COMP6: number = 0;

  private sseSub?: Subscription;
  constructor(private sseService: SseService) {}
  title = 'Centralized Compressed Air Station Overview';

  compressorLabels = [
    'Compressor 1',
    'Compressor 2',
    'Compressor 3',
    'Compressor 4',
    'Compressor 5',
    'Compressor 6',
  ];

  parameters = [
    { label: 'IGCA Flow', unit: 'Nm³/hr', value: 0 },
    { label: 'IGCA Pressure', unit: 'kg/cm²', value: 0 },
    { label: 'PGCA Flow', unit: 'Nm³/hr', value: 0 },
    { label: 'PGCA Pressure', unit: 'kg/cm²', value: 0 },
  ];

  // compressorFlows = [12, 32, 34, 12, 23, 24]; // computed with * 1.72
  compressorCurrents = [324, 45, 45, 56, 67, 23]; // raw amp values

  plants = [
    {
      name: 'COB 11',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'CDCP',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'Sinter Plant',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'Blast Furnace',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'LDCP',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'BOF',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'CCP',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'Wire Rod Mill',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'Bar Mill',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'USM',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
    {
      name: 'PBS 2',
      if: 0,
      pf: 0,
      ip: 0,
      pp: 0,
    },
  ];

  currentThreshold = 50;
  ngOnInit(): void {}
  private animateValue(
    field: keyof this,
    start: number,
    end: number,
    duration: number
  ) {
    // Ensure valid numbers
    if (isNaN(start)) start = 0;
    if (isNaN(end)) end = 0;

    const range = end - start;
    if (range === 0) {
      (this as any)[field] = end;
      return;
    }

    const steps = 30; // number of animation steps
    const stepTime = Math.max(Math.floor(duration / steps), 20);
    const increment = range / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const value = start + increment * currentStep;

      // Force integer (rounded) values
      (this as any)[field] = Math.round(value);

      if (currentStep >= steps) {
        clearInterval(timer);
        (this as any)[field] = end; // ensure final value
      }
    }, stepTime);
  }
}
