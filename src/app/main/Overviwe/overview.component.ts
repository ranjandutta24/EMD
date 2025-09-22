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

  private ssebf5?: Subscription;
  constructor(private sseService: SseService) {}
  splitLetters(text: string): string[] {
    return text.split('').map((c) => (c === ' ' ? '\u00A0' : c));
  }
  ngOnInit(): void {
    this.ssebf5 = this.sseService.getBf5().subscribe((data: any) => {
      console.log('es', data);

      this.bf5_res.BLAST_VOLUME = data.BLAST_VOLUME;
      this.bf5_res.BLAST_PRESSURE = data.BLAST_PRESSURE;
      this.bf5_res.FLARE_STACK_FLOW = data.FLARE_STACK_FLOW;
      this.bf5_res.FLARE_STACK_PRESSURE = data.FLARE_STACK_PRESSURE;
      this.bf5_res.SNORT_POSITION = data.SNORT_POSITION;
    });
  }
}
