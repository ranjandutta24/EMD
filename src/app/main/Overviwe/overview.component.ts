import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

@Component({
  selector: 'app-ccas-live',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  bf = 'BF#5';
  cob11 = 'COB#11';
  cob10 = 'COB#10';
  bof_holder = 'BOF HOLDER';
  cbm = 'CBM';
  pbs2 = 'PBS#2 BOILER (1,2,3)';
  sinter = 'SINTER';
  ldcp = 'LDCP';
  bof_ccp = 'BOF/CCP';
  agbs_cgbs = 'AGBS/CGBS';
  stove = 'STOVE';
  mills = "MILL'S";
  fale_stack_cog = 'FALE STACK (COG)';
  fale_stack_bfg = 'FALE STACK (BFG)';
  micellanous = 'MICELLANEOUS';

  bf5_res = {
    BLAST_VOLUME: 0,
    BLAST_PRESSURE: 0,
    FLARE_STACK_FLOW: 0,
    FLARE_STACK_PRESSURE: 0,
    SNORT_POSITION: 0,
  };
  previousValues: any = { ...this.bf5_res }; // store old values

  private ssebf5?: Subscription;

  constructor(private sseService: SseService) {}

  splitLetters(text: string): string[] {
    return text.split('').map((c) => (c === ' ' ? '\u00A0' : c));
  }

  animateValue(
    start: number,
    end: number,
    duration: number,
    callback: (val: number) => void,
    decimals: number = 0
  ) {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = start + (end - start) * progress;

      // keep decimals
      const formattedValue = parseFloat(value.toFixed(decimals));
      callback(formattedValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  ngOnInit(): void {
    this.ssebf5 = this.sseService.getBf5().subscribe((data: any) => {
      console.log('es', data);

      // Animate each property
      this.animateValue(
        this.previousValues.BLAST_VOLUME,
        data.BLAST_VOLUME,
        800, // ms
        (val) => (this.bf5_res.BLAST_VOLUME = val)
      );

      this.animateValue(
        this.previousValues.BLAST_PRESSURE,
        data.BLAST_PRESSURE,
        800,
        (val) => (this.bf5_res.BLAST_PRESSURE = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.FLARE_STACK_FLOW,
        data.FLARE_STACK_FLOW,
        800,
        (val) => (this.bf5_res.FLARE_STACK_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.FLARE_STACK_PRESSURE,
        data.FLARE_STACK_PRESSURE,
        800,
        (val) => (this.bf5_res.FLARE_STACK_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.SNORT_POSITION,
        data.SNORT_POSITION,
        800,
        (val) => (this.bf5_res.SNORT_POSITION = val),
        2
      );

      // Update previous values for next round
      this.previousValues = { ...data };
    });
  }
}
