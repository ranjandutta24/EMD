import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

@Component({
  selector: 'app-ccas-live',
  templateUrl: './overview.component.html',
  // styleUrls: ['./overview.component.scss'],
  styleUrls: ['./test2.scss'],
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
  fale_stack_cog = 'FLARE STACK (COG)';
  fale_stack_bfg = 'FLARE STACK (BFG)';
  micellanous = 'MICELLANEOUS';


  overview_res = {
    BLAST_VOLUME: 0,
    BLAST_PRESSURE: 0,
    FLARE_STACK_FLOW: 0,
    FLARE_STACK_PRESSURE: 0,
    SNORT_POSITION: 0,
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
    STOVE_1_BF_GAS: 0,
    STOVE_2_BF_GAS: 0,
    STOVE_3_BF_GAS: 0,
    STOVE_4_BF_GAS: 0,
    CO_GAS_CONSUMPTION: 0,
    CDI_COG_CONSUMPTION: 0,
    COG123: 0,
    BFG123: 0,
    CBM_GAS123: 0,
    BOF_GAS_TOTAL: 0,
    K_1_FLOW: 0,
    K_2_FLOW: 0,
    K_3_FLOW: 0,
    K_4_FLOW: 0,
    INLET_PRESSURE: 0,
    TOTAL_CONSUMPTION: 0,
    MAKE: 0,
    PRESSURE: 0,
    FLARE_FLOW: 0,
    FLARE_PRESSURE: 0,
    U_F_N_1_BLOCK_COG: 0,
    U_F_N_1_BLOCK_BFG: 0,
    U_F_N_2_BLOCK_COG: 0,
    U_F_N_2_BLOCK_BFG: 0,
    FLARE_STACK_SET_POINT: 0,
    M1VOLUME: 0,
    M1FLOW: 0,
    M2VOLUME: 0,
    M2FLOW: 0,
    INLETPRESSURE: 0,
    OUTLETPRESSURE: 0,
    GASHOLDERPRES: 0,
    GASHOLDERTEMP: 0,
    EXPORTEDGAS: 0,
    GAS_FLOW_mills: 0,

    COB10_GASMAKEF: 0,
    SP1_MIXGASPRESS: 0,
    SP1_MIXGASF: 0,
    SP2_MIXGASPRESS: 0,
    SP2_MIXGASF: 0,
    BF_COF: 0
  };

  previousValues: any = { ...this.overview_res };

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
    this.sseoverview = this.sseService.getOverview().subscribe((data: any) => {
      // console.log('es', data);
      // console.log(this.bf5_res);

      // Animate each property
      //sourav code
      this.animateValue(
        this.previousValues.COB10_GASMAKEF,
        data.COB10_GASMAKEF,
        800,
        (val) => (this.overview_res.COB10_GASMAKEF = val),
        2
      );


      this.animateValue(
        this.previousValues.SP1_MIXGASF,
        data.SP1_MIXGASF,
        800, // ms
        (val) => (this.overview_res.SP1_MIXGASF = val)
      );

      this.animateValue(
        this.previousValues.SP1_MIXGASPRESS,
        data.SP1_MIXGASPRESS,
        800,
        (val) => (this.overview_res.SP1_MIXGASPRESS = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.SP2_MIXGASF,
        data.SP2_MIXGASF,
        800,
        (val) => (this.overview_res.SP2_MIXGASF = val),
        2
      );

      this.animateValue(
        this.previousValues.SP2_MIXGASPRESS,
        data.SP2_MIXGASPRESS,
        800,
        (val) => (this.overview_res.SP2_MIXGASPRESS = val),
        2
      );


      this.animateValue(
        this.previousValues.BF_COF,
        data.BF_COF,
        800,
        (val) => (this.overview_res.BF_COF = val),
        2
      );
      //sourav code

      this.animateValue(
        this.previousValues.BLAST_VOLUME,
        data.BLAST_VOLUME,
        800, // ms
        (val) => (this.overview_res.BLAST_VOLUME = val)
      );

      this.animateValue(
        this.previousValues.BLAST_PRESSURE,
        data.BLAST_PRESSURE,
        800,
        (val) => (this.overview_res.BLAST_PRESSURE = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.FLARE_STACK_FLOW,
        data.FLARE_STACK_FLOW,
        800,
        (val) => (this.overview_res.FLARE_STACK_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.FLARE_STACK_PRESSURE,
        data.FLARE_STACK_PRESSURE,
        800,
        (val) => (this.overview_res.FLARE_STACK_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.SNORT_POSITION,
        data.SNORT_POSITION,
        800,
        (val) => (this.overview_res.SNORT_POSITION = val),
        2
      );

      this.animateValue(
        this.previousValues.MG_WRM_FLOW,
        data.MG_WRM_FLOW,
        800, // ms
        (val) => (this.overview_res.MG_WRM_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.MG_BRM_FLOW,
        data.MG_BRM_FLOW,
        800,
        (val) => (this.overview_res.MG_BRM_FLOW = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.MG_USM_FLOW,
        data.MG_USM_FLOW,
        800,
        (val) => (this.overview_res.MG_USM_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.TOTAL_FLOW,
        data.TOTAL_FLOW,
        800,
        (val) => (this.overview_res.TOTAL_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.MG_WRM_PRESSURE,
        data.MG_WRM_PRESSURE,
        800,
        (val) => (this.overview_res.MG_WRM_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.MG_BRM_PRESSURE,
        data.MG_BRM_PRESSURE,
        800,
        (val) => (this.overview_res.MG_BRM_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.MG_USM_PRESSURE,
        data.MG_USM_PRESSURE,
        800,
        (val) => (this.overview_res.MG_USM_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.MIX_GAS_PRESSURE,
        data.MIX_GAS_PRESSURE,
        800,
        (val) => (this.overview_res.MIX_GAS_PRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.CV,
        data.CV,
        800,
        (val) => (this.overview_res.CV = val),
        2
      );

      this.animateValue(
        this.previousValues.CBM_FLOW,
        data.CBM_FLOW,
        800,
        (val) => (this.overview_res.CBM_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.BOF_FLOW,
        data.BOF_FLOW,
        800,
        (val) => (this.overview_res.BOF_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.STOVE_1_BF_GAS,
        data.STOVE_1_BF_GAS,
        800, // ms
        (val) => (this.overview_res.STOVE_1_BF_GAS = val),
        2
      );

      this.animateValue(
        this.previousValues.STOVE_2_BF_GAS,
        data.STOVE_2_BF_GAS,
        800,
        (val) => (this.overview_res.STOVE_2_BF_GAS = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.STOVE_3_BF_GAS,
        data.STOVE_3_BF_GAS,
        800,
        (val) => (this.overview_res.STOVE_3_BF_GAS = val),
        2
      );

      this.animateValue(
        this.previousValues.STOVE_4_BF_GAS,
        data.STOVE_4_BF_GAS,
        800,
        (val) => (this.overview_res.STOVE_4_BF_GAS = val),
        2
      );

      this.animateValue(
        this.previousValues.CO_GAS_CONSUMPTION,
        data.CO_GAS_CONSUMPTION,
        800,
        (val) => (this.overview_res.CO_GAS_CONSUMPTION = val),
        2
      );

      this.animateValue(
        this.previousValues.CDI_COG_CONSUMPTION,
        data.CDI_COG_CONSUMPTION,
        800,
        (val) => (this.overview_res.CDI_COG_CONSUMPTION = val),
        2
      );

      this.animateValue(
        this.previousValues.COG123,
        data.COG123,
        800, // ms
        (val) => (this.overview_res.COG123 = val),
        2
      );

      this.animateValue(
        this.previousValues.BFG123,
        data.BFG123,
        800,
        (val) => (this.overview_res.BFG123 = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.CBM_GAS123,
        data.CBM_GAS123,
        800,
        (val) => (this.overview_res.CBM_GAS123 = val),
        2
      );
      this.animateValue(
        this.previousValues.BOF_GAS_TOTAL,
        data.BOF_GAS_TOTAL,
        800,
        (val) => (this.overview_res.BOF_GAS_TOTAL = val),
        2
      );

      this.animateValue(
        this.previousValues.MAKE,
        data.MAKE,
        800, // ms
        (val) => (this.overview_res.MAKE = val),
        2
      );

      this.animateValue(
        this.previousValues.PRESSURE,
        data.PRESSURE,
        800,
        (val) => (this.overview_res.PRESSURE = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.FLARE_FLOW,
        data.FLARE_FLOW,
        800,
        (val) => (this.overview_res.FLARE_FLOW = val),
        2
      );
      this.animateValue(
        this.previousValues.FLARE_PRESSURE,
        data.FLARE_PRESSURE,
        800,
        (val) => (this.overview_res.FLARE_PRESSURE = val),
        2
      );
      this.animateValue(
        this.previousValues.U_F_N_1_BLOCK_COG,
        data.U_F_N_1_BLOCK_COG,
        800,
        (val) => (this.overview_res.U_F_N_1_BLOCK_COG = val),
        2
      );
      this.animateValue(
        this.previousValues.U_F_N_1_BLOCK_BFG,
        data.U_F_N_1_BLOCK_BFG,
        800,
        (val) => (this.overview_res.U_F_N_1_BLOCK_BFG = val),
        2
      );
      this.animateValue(
        this.previousValues.U_F_N_2_BLOCK_COG,
        data.U_F_N_2_BLOCK_COG,
        800,
        (val) => (this.overview_res.U_F_N_2_BLOCK_COG = val),
        2
      );
      this.animateValue(
        this.previousValues.U_F_N_2_BLOCK_BFG,
        data.U_F_N_2_BLOCK_BFG,
        800,
        (val) => (this.overview_res.U_F_N_2_BLOCK_BFG = val),
        2
      );
      this.animateValue(
        this.previousValues.FLARE_STACK_SET_POINT,
        data.FLARE_STACK_SET_POINT,
        800,
        (val) => (this.overview_res.FLARE_STACK_SET_POINT = val),
        2
      );

      this.animateValue(
        this.previousValues.K_1_FLOW,
        data.K_1_FLOW,
        800, // ms
        (val) => (this.overview_res.K_1_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.K_2_FLOW,
        data.K_2_FLOW,
        800,
        (val) => (this.overview_res.K_2_FLOW = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues.K_3_FLOW,
        data.K_3_FLOW,
        800,
        (val) => (this.overview_res.K_3_FLOW = val),
        2
      );
      this.animateValue(
        this.previousValues.K_4_FLOW,
        data.K_4_FLOW,
        800,
        (val) => (this.overview_res.K_4_FLOW = val),
        2
      );
      this.animateValue(
        this.previousValues.INLET_PRESSURE,
        data.INLET_PRESSURE,
        800,
        (val) => (this.overview_res.INLET_PRESSURE = val),
        2
      );
      this.animateValue(
        this.previousValues.TOTAL_CONSUMPTION,
        data.TOTAL_CONSUMPTION,
        800,
        (val) => (this.overview_res.TOTAL_CONSUMPTION = val),
        2
      );

      this.animateValue(
        this.previousValues.M1FLOW,
        data.M1FLOW,
        800, // ms
        (val) => (this.overview_res.M1FLOW = val)
      );
      this.animateValue(
        this.previousValues.M1VOLUME,
        data.M1VOLUME,
        800, // ms
        (val) => (this.overview_res.M1VOLUME = val)
      );
      this.animateValue(
        this.previousValues.M2VOLUME,
        data.M2VOLUME,
        800, // ms
        (val) => (this.overview_res.M2VOLUME = val)
      );

      this.animateValue(
        this.previousValues.M2FLOW,
        data.M2FLOW,
        800,
        (val) => (this.overview_res.M2FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues.INLETPRESSURE,
        data.INLETPRESSURE,
        800,
        (val) => (this.overview_res.INLETPRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.OUTLETPRESSURE,
        data.OUTLETPRESSURE,
        800,
        (val) => (this.overview_res.OUTLETPRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues.GASHOLDERPRES,
        data.GASHOLDERPRES,
        800, // ms
        (val) => (this.overview_res.GASHOLDERPRES = val)
      );
      this.animateValue(
        this.previousValues.GASHOLDERTEMP,
        data.GASHOLDERTEMP,
        800, // ms
        (val) => (this.overview_res.GASHOLDERTEMP = val)
      );
      this.animateValue(
        this.previousValues.EXPORTEDGAS,
        data.EXPORTEDGAS,
        800, // ms
        (val) => (this.overview_res.EXPORTEDGAS = val)
      );

      this.animateValue(
        this.previousValues.GAS_FLOW_mills,
        data.GAS_FLOW_mills,
        800,
        (val) => (this.overview_res.GAS_FLOW_mills = val),
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
