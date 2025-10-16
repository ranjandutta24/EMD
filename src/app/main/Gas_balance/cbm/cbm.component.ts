import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbm',
  templateUrl: './cbm.component.html',
  styleUrls: ['./cbm.component.scss']
})
export class CbmComponent implements OnInit {
  selectedNode: any = null;

  nodes: any = [
    {
      name: 'CBM',
      cssClass: 'ngx-org-head',
      childs: [
        {
          name: 'GEECL FLOW (SCM/hr)',
          cssClass: 'ngx-org-body_orange',
          childs: [
            {
              name: 'TOTALIZER',
              cssClass: 'ngx-org-body_green',
              childs: [
                { name: 'M1', cssClass: 'ngx-org-body_redorange' },
                { name: 'M2', cssClass: 'ngx-org-body_redorange' }
              ]
            },
          ]
        },
        {
          name: 'MRS FLOW',
          cssClass: 'ngx-org-body_orange ',
          childs: [
            { name: 'M1', cssClass: 'ngx-org-body_green' },
            { name: 'M2', cssClass: 'ngx-org-body_green' }
          ]
        },
        {
          name: 'Pressure (Kg/cm²)',
          cssClass: 'ngx-org-body_orange',
          childs: [
            { name: 'Inlet', cssClass: 'ngx-org-body_green' },
            { name: 'Outlet', cssClass: 'ngx-org-body_green' }
          ]
        },
        {
          name: 'Mills',
          cssClass: 'ngx-org-body_orange'
        },
        {
          name: 'Pbs#2',
          cssClass: 'ngx-org-body_orange'
        },
        {
          name: 'BOF & CCP',
          cssClass: 'ngx-org-body_orange'
        },
        {
          name: 'CDI',
          cssClass: 'ngx-org-body_orange'
        },
        {
          name: 'LDCP',
          cssClass: 'ngx-org-body_orange'
        },
        {
          name: 'FLARE',
          cssClass: 'ngx-org-body_orange'
        }
      ]
    }
  ];

  onNodeClick(event: any) {
    this.selectedNode = event;
    console.log('Selected Node:', event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
