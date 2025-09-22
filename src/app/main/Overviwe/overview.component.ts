import { Component, OnInit } from '@angular/core';

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
  constructor() {}
  splitLetters(text: string): string[] {
    return text.split('').map((c) => (c === ' ' ? '\u00A0' : c));
  }
  ngOnInit(): void {}
}
