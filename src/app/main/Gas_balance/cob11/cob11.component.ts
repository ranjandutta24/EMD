import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

@Component({
  selector: 'app-cob11',
  templateUrl: './cob11.component.html',
  styleUrls: ['./cob11.component.scss']
})
export class Cob11Component implements OnInit {
  cogasflow_res = {
    FT0600F003_C: 0,
    COGASMAKEPRESSURE: 0,
    COB10_GASMAKEF: 0,
    COB10_COGSUPPLY: 0,
    COFLARESTACKFLOW: 0,
    COFLARESTACKPRESSURE: 0,
    CO_GAS1_F: 0,
    CO_GAS2_F: 0,
    PBS_BCOGF: 0,
    BF_COF: 0,
    SP_CO_GAS: 0,
    COG_FLOW_GMS: 0,
  };

  previousValues: any = { ...this.cogasflow_res };

  private sseoverview?: Subscription;


  constructor(private sseService: SseService) { }

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
    this.sseoverview = this.sseService.getcogasflow().subscribe((data: any) => {
      console.log('es', data);
      // console.log(this.bf5_res);

      // Animate each property
      //sourav code
      this.animateValue(
        this.previousValues.FT0600F003_C,
        data.FT0600F003_C,
        800,
        (val) => (this.cogasflow_res.FT0600F003_C = val),
        2
      );


      this.animateValue(
        this.previousValues.COGASMAKEPRESSURE,
        data.COGASMAKEPRESSURE,
        800, // ms
        (val) => (this.cogasflow_res.COGASMAKEPRESSURE = val)
      );

      this.animateValue(
        this.previousValues.COB10_GASMAKEF,
        data.COB10_GASMAKEF,
        800,
        (val) => (this.cogasflow_res.COB10_GASMAKEF = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.COB10_COGSUPPLY,
        data.COB10_COGSUPPLY,
        800,
        (val) => (this.cogasflow_res.COB10_COGSUPPLY = val),
        2
      );

      this.animateValue(
        this.previousValues.COFLARESTACKFLOW,
        data.COFLARESTACKFLOW,
        800,
        (val) => (this.cogasflow_res.COFLARESTACKFLOW = val),
        2
      );


      this.animateValue(
        this.previousValues.COFLARESTACKPRESSURE,
        data.COFLARESTACKPRESSURE,
        800,
        (val) => (this.cogasflow_res.COFLARESTACKPRESSURE = val),
        2
      );
      //sourav code

      this.animateValue(
        this.previousValues.CO_GAS1_F,
        data.CO_GAS1_F,
        800, // ms
        (val) => (this.cogasflow_res.CO_GAS1_F = val)
      );

      this.animateValue(
        this.previousValues.CO_GAS2_F,
        data.CO_GAS2_F,
        800,
        (val) => (this.cogasflow_res.CO_GAS2_F = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.PBS_BCOGF,
        data.PBS_BCOGF,
        800,
        (val) => (this.cogasflow_res.PBS_BCOGF = val),
        2
      );

      this.animateValue(
        this.previousValues.BF_COF,
        data.BF_COF,
        800,
        (val) => (this.cogasflow_res.BF_COF = val),
        2
      );

      this.animateValue(
        this.previousValues.SP_CO_GAS,
        data.SP_CO_GAS,
        800,
        (val) => (this.cogasflow_res.SP_CO_GAS = val),
        2
      );

      this.animateValue(
        this.previousValues.COG_FLOW_GMS,
        data.COG_FLOW_GMS,
        800, // ms
        (val) => (this.cogasflow_res.COG_FLOW_GMS = val),
        2
      );

      // Update previous values for next round
      this.previousValues = { ...data };
    });

  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.sseoverview) {
      this.sseoverview.unsubscribe();
    }
  }

}
