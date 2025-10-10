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
  stove_res = {
    STOVE_1_BF_GAS: 0,
    STOVE_2_BF_GAS: 0,
    STOVE_3_BF_GAS: 0,
    STOVE_4_BF_GAS: 0,
    CO_GAS_CONSUMPTION: 0,
    CDI_COG_CONSUMPTION: 0,
  };

  pbs2_res = {
    COG123: 0,
    BFG123: 0,
    CBM_GAS123: 0,
    BOF_GAS_TOTAL: 0,
  };

  ldcp_res = {
    K_1_FLOW: 0,
    K_2_FLOW: 0,
    K_3_FLOW: 0,
    K_4_FLOW: 0,
    INLET_PRESSURE: 0,
    TOTAL_CONSUMPTION: 0,
  };
  cob11_res = {
    MAKE: 0,
    PRESSURE: 0,
    FLARE_FLOW: 0,
    FLARE_PRESSURE: 0,
    U_F_N_1_BLOCK_COG: 0,
    U_F_N_1_BLOCK_BFG: 0,
    U_F_N_2_BLOCK_COG: 0,
    U_F_N_2_BLOCK_BFG: 0,
    FLARE_STACK_SET_POINT: 0,
  };
  cbm_res = {
    M1VOLUME: 0,
    M1FLOW: 0,
    M2VOLUME: 0,
    M2FLOW: 0,
    INLETPRESSURE: 0,
    OUTLETPRESSURE: 0,
  }

  previousValues_bf5: any = { ...this.bf5_res };
  previousValues_mills: any = { ...this.mills_res };
  previousValues_stove: any = { ...this.stove_res };
  previousValues_pbs2: any = { ...this.pbs2_res };
  previousValues_ldcp: any = { ...this.ldcp_res };
  previousValues_cob11: any = { ...this.cob11_res };
  previousValues_cbm: any = { ...this.cbm_res };

  private ssebf5?: Subscription;
  private ssemills?: Subscription;
  private ssestove?: Subscription;
  private ssespbs2?: Subscription;
  private ssesldcp?: Subscription;
  private ssescob11?: Subscription;
  private ssescbm?: Subscription;

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
    this.ssebf5 = this.sseService.getBf5().subscribe((data: any) => {
      // console.log('es', data);
      // console.log(this.bf5_res);

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
      // console.log(this.mills_res);
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

    this.ssestove = this.sseService.getstove().subscribe((data: any) => {
      // console.log('es', data);

      // Animate each property
      this.animateValue(
        this.previousValues_stove.STOVE_1_BF_GAS,
        data.STOVE_1_BF_GAS,
        800, // ms
        (val) => (this.stove_res.STOVE_1_BF_GAS = val),
        2
      );

      this.animateValue(
        this.previousValues_stove.STOVE_2_BF_GAS,
        data.STOVE_2_BF_GAS,
        800,
        (val) => (this.stove_res.STOVE_2_BF_GAS = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues_stove.STOVE_3_BF_GAS,
        data.STOVE_3_BF_GAS,
        800,
        (val) => (this.stove_res.STOVE_3_BF_GAS = val),
        2
      );

      this.animateValue(
        this.previousValues_stove.STOVE_4_BF_GAS,
        data.STOVE_4_BF_GAS,
        800,
        (val) => (this.stove_res.STOVE_4_BF_GAS = val),
        2
      );

      this.animateValue(
        this.previousValues_stove.CO_GAS_CONSUMPTION,
        data.CO_GAS_CONSUMPTION,
        800,
        (val) => (this.stove_res.CO_GAS_CONSUMPTION = val),
        2
      );

      this.animateValue(
        this.previousValues_stove.CDI_COG_CONSUMPTION,
        data.CDI_COG_CONSUMPTION,
        800,
        (val) => (this.stove_res.CDI_COG_CONSUMPTION = val),
        2
      );

      // Update previous values for next round
      this.previousValues_stove = { ...data };
    });
    this.ssespbs2 = this.sseService.getpbs2().subscribe((data: any) => {
      // Animate each property
      this.animateValue(
        this.previousValues_pbs2.COG123,
        data.COG123,
        800, // ms
        (val) => (this.pbs2_res.COG123 = val),
        2
      );

      this.animateValue(
        this.previousValues_pbs2.BFG123,
        data.BFG123,
        800,
        (val) => (this.pbs2_res.BFG123 = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues_pbs2.CBM_GAS123,
        data.CBM_GAS123,
        800,
        (val) => (this.pbs2_res.CBM_GAS123 = val),
        2
      );
      this.animateValue(
        this.previousValues_pbs2.BOF_GAS_TOTAL,
        data.BOF_GAS_TOTAL,
        800,
        (val) => (this.pbs2_res.BOF_GAS_TOTAL = val),
        2
      );

      // Update previous values for next round
      this.previousValues_pbs2 = { ...data };
    });

    this.ssescob11 = this.sseService.getcob11().subscribe((data: any) => {
      // Animate each property
      this.animateValue(
        this.previousValues_cob11.MAKE,
        data.MAKE,
        800, // ms
        (val) => (this.cob11_res.MAKE = val),
        2
      );

      this.animateValue(
        this.previousValues_cob11.PRESSURE,
        data.PRESSURE,
        800,
        (val) => (this.cob11_res.PRESSURE = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues_cob11.FLARE_FLOW,
        data.FLARE_FLOW,
        800,
        (val) => (this.cob11_res.FLARE_FLOW = val),
        2
      );
      this.animateValue(
        this.previousValues_cob11.FLARE_PRESSURE,
        data.FLARE_PRESSURE,
        800,
        (val) => (this.cob11_res.FLARE_PRESSURE = val),
        2
      );
      this.animateValue(
        this.previousValues_cob11.U_F_N_1_BLOCK_COG,
        data.U_F_N_1_BLOCK_COG,
        800,
        (val) => (this.cob11_res.U_F_N_1_BLOCK_COG = val),
        2
      );
      this.animateValue(
        this.previousValues_cob11.U_F_N_1_BLOCK_BFG,
        data.U_F_N_1_BLOCK_BFG,
        800,
        (val) => (this.cob11_res.U_F_N_1_BLOCK_BFG = val),
        2
      );
      this.animateValue(
        this.previousValues_cob11.U_F_N_2_BLOCK_COG,
        data.U_F_N_2_BLOCK_COG,
        800,
        (val) => (this.cob11_res.U_F_N_2_BLOCK_COG = val),
        2
      );
      this.animateValue(
        this.previousValues_cob11.U_F_N_2_BLOCK_BFG,
        data.U_F_N_2_BLOCK_BFG,
        800,
        (val) => (this.cob11_res.U_F_N_2_BLOCK_BFG = val),
        2
      );
      this.animateValue(
        this.previousValues_cob11.FLARE_STACK_SET_POINT,
        data.FLARE_STACK_SET_POINT,
        800,
        (val) => (this.cob11_res.FLARE_STACK_SET_POINT = val),
        2
      );

      // Update previous values for next round
      this.previousValues_cob11 = { ...data };
    });
    this.ssesldcp = this.sseService.getsldcp().subscribe((data: any) => {
      // Animate each property
      this.animateValue(
        this.previousValues_ldcp.K_1_FLOW,
        data.K_1_FLOW,
        800, // ms
        (val) => (this.ldcp_res.K_1_FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues_ldcp.K_2_FLOW,
        data.K_2_FLOW,
        800,
        (val) => (this.ldcp_res.K_2_FLOW = val),
        2
      );

      // repeat for other props
      this.animateValue(
        this.previousValues_ldcp.K_3_FLOW,
        data.K_3_FLOW,
        800,
        (val) => (this.ldcp_res.K_3_FLOW = val),
        2
      );
      this.animateValue(
        this.previousValues_ldcp.K_4_FLOW,
        data.K_4_FLOW,
        800,
        (val) => (this.ldcp_res.K_4_FLOW = val),
        2
      );
      this.animateValue(
        this.previousValues_ldcp.INLET_PRESSURE,
        data.INLET_PRESSURE,
        800,
        (val) => (this.ldcp_res.INLET_PRESSURE = val),
        2
      );
      this.animateValue(
        this.previousValues_ldcp.TOTAL_CONSUMPTION,
        data.TOTAL_CONSUMPTION,
        800,
        (val) => (this.ldcp_res.TOTAL_CONSUMPTION = val),
        2
      );

      // Update previous values for next round
      this.previousValues_ldcp = { ...data };
    });

    this.ssescbm = this.sseService.getcbm().subscribe((data: any) => {
      console.log('es', data);
      console.log(this.cbm_res);

      // Animate each property
      this.animateValue(
        this.previousValues_cbm.M1FLOW,
        data.M1FLOW,
        800, // ms
        (val) => (this.cbm_res.M1FLOW = val)
      );
      this.animateValue(
        this.previousValues_cbm.M1VOLUME,
        data.M1VOLUME,
        800, // ms
        (val) => (this.cbm_res.M1VOLUME = val)
      );
      this.animateValue(
        this.previousValues_cbm.M2VOLUME,
        data.M2VOLUME,
        800, // ms
        (val) => (this.cbm_res.M2VOLUME = val)
      );

      this.animateValue(
        this.previousValues_cbm.M2FLOW,
        data.M2FLOW,
        800,
        (val) => (this.cbm_res.M2FLOW = val),
        2
      );

      this.animateValue(
        this.previousValues_cbm.INLETPRESSURE,
        data.INLETPRESSURE,
        800,
        (val) => (this.cbm_res.INLETPRESSURE = val),
        2
      );

      this.animateValue(
        this.previousValues_cbm.OUTLETPRESSURE,
        data.OUTLETPRESSURE,
        800,
        (val) => (this.cbm_res.OUTLETPRESSURE = val),
        2
      );


      // // Update previous values for next round
      this.previousValues_cbm = { ...data };
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
    if (this.ssestove) {
      this.ssestove.unsubscribe();
    }
    if (this.ssespbs2) {
      this.ssespbs2.unsubscribe();
    }
    if (this.ssesldcp) {
      this.ssesldcp.unsubscribe();
    }
    if (this.ssescob11) {
      this.ssescob11.unsubscribe();
    }
    if (this.ssescbm) {
      this.ssescbm.unsubscribe();
    }
  }
}
