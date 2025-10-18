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
          cssClass: 'ngx-org-body_uf',
          childs: [
            {
              name: 'TOTALIZER',
              cssClass: 'ngx-org-body_uf',
              childs: [
                { name: 'M1', cssClass: 'ngx-org-body_uf' },
                { name: 'M2', cssClass: 'ngx-org-body_uf' }
              ]
            },
          ]
        },
        {
          name: 'MRS FLOW',
          cssClass: 'ngx-org-body_orange',
          childs: [
            { name: 'M1', cssClass: 'ngx-org-body_orange' },
            { name: 'M2', cssClass: 'ngx-org-body_orange' }
          ]
        },
        {
          name: 'Pressure (Kg/cm²)',
          cssClass: 'ngx-org-body_green',
          childs: [
            { name: 'Inlet', cssClass: 'ngx-org-body_green' },
            { name: 'Outlet', cssClass: 'ngx-org-body_green' }
          ]
        },
        {
          name: 'Mills',
          cssClass: 'ngx-org-body'
        },
        {
          name: 'PBS#2',
          cssClass: 'ngx-org-body_redorange'
        },
        {
          name: 'BOF & CCP',
          cssClass: 'ngx-org-body_purple'
        },
        {
          name: 'CDI',
          cssClass: 'ngx-org-body_yellow'
        },
        {
          name: 'LDCP',
          cssClass: 'ngx-org-body_pink'
        },
        {
          name: 'FLARE',
          cssClass: 'ngx-org-body_teal'
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
