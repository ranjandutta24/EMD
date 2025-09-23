import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

@Component({
  selector: 'app-ccas-live',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {
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
  mills_res = {
    MG_WRM_FLOW: 0,
    MG_BRM_FLOW: 0,
    MG_USM_FLOW: 0,
    TOTAL_FLOW: 0,
    MG_WRM_PRESSURE: 0,
    MG_BRM_PRESSURE: 0,
    MG_USM_PRESSURE: 0,
    MIX_GAS_PRESSURE: 0,
    CV: 0,
    CBM_FLOW: 0,
    BOF_FLOW: 0,
  };

  previousValues_bf5: any = { ...this.bf5_res }; // store old values
  previousValues_mills: any = { ...this.mills_res };

  private ssebf5?: Subscription;
  private ssemills?: Subscription;

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
      // console.log('es', data);
      console.log(this.bf5_res);

      // Animate each property
      this.animateValue(
        this.previousValues_bf5.BLAST_VOLUME,
        data.BLAST_VOLUME,
        800, // ms
        (val) => (this.bf5_res.BLAST_VOLUME = val)
      );

      this.animateValue(
        this.previousValues_bf5.BLAST_PRESSURE,
        data.BLAST_PRESSURE,
        800,
        (val) => (this.bf5_res.BLAST_PRESSURE = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues_bf5.FLARE_STACK_FLOW,
        data.FLARE_STACK_FLOW,
        800,
        (val) => (this.bf5_res.FLARE_STACK_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues_bf5.FLARE_STACK_PRESSURE,
        data.FLARE_STACK_PRESSURE,
        800,
        (val) => (this.bf5_res.FLARE_STACK_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues_bf5.SNORT_POSITION,
        data.SNORT_POSITION,
        800,
        (val) => (this.bf5_res.SNORT_POSITION = val),
        2
      );

      // Update previous values for next round
      this.previousValues_bf5 = { ...data };
    });

    // mills
    this.ssemills = this.sseService.getmills().subscribe((data: any) => {
      console.log(this.mills_res);
      // console.log('es', data);

      // Animate each property
      this.animateValue(
        this.previousValues_mills.MG_WRM_FLOW,
        data.MG_WRM_FLOW,
        800, // ms
        (val) => (this.mills_res.MG_WRM_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.MG_BRM_FLOW,
        data.MG_BRM_FLOW,
        800,
        (val) => (this.mills_res.MG_BRM_FLOW = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues_mills.MG_USM_FLOW,
        data.MG_USM_FLOW,
        800,
        (val) => (this.mills_res.MG_USM_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.TOTAL_FLOW,
        data.TOTAL_FLOW,
        800,
        (val) => (this.mills_res.TOTAL_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.MG_WRM_PRESSURE,
        data.MG_WRM_PRESSURE,
        800,
        (val) => (this.mills_res.MG_WRM_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.MG_BRM_PRESSURE,
        data.MG_BRM_PRESSURE,
        800,
        (val) => (this.mills_res.MG_BRM_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.MG_USM_PRESSURE,
        data.MG_USM_PRESSURE,
        800,
        (val) => (this.mills_res.MG_USM_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.MIX_GAS_PRESSURE,
        data.MIX_GAS_PRESSURE,
        800,
        (val) => (this.mills_res.MIX_GAS_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.CV,
        data.CV,
        800,
        (val) => (this.mills_res.CV = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.CBM_FLOW,
        data.CBM_FLOW,
        800,
        (val) => (this.mills_res.CBM_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues_mills.BOF_FLOW,
        data.BOF_FLOW,
        800,
        (val) => (this.mills_res.BOF_FLOW = val),
        2
      );

      // Update previous values for next round
      this.previousValues_mills = { ...data };
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.ssebf5) {
      this.ssebf5.unsubscribe();
    }
    if (this.ssemills) {
      this.ssemills.unsubscribe();
    }
  }
}
