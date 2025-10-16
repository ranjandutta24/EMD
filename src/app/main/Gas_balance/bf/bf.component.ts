import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bf',
  templateUrl: './bf.component.html',
  styleUrls: ['./bf.component.scss']
})
export class BfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedNode: any = null;

  nodes: any = [
    {
      name: 'BF#5',
      cssClass: 'ngx-org-head',
      childs: [
        {
          name: 'BLAST VOL (NM3/MIN)',
          cssClass: 'ngx-org-body_orange'
        },
        // {
        //   name: 'B. PRESSURE (KG/CM²)',
        //   cssClass: 'ngx-org-body_orange'
        // },
        {
          name: 'MAKE (T/Nm³/hr)',
          cssClass: 'ngx-org-body_green',
          childs: [
            {
              name: 'PRESSURE (MMWC)',
              cssClass: 'ngx-org-body_green',
              childs: [
                {
                  name: 'STOVE (TOTAL)',
                  cssClass: 'ngx-org-body_blue',
                  childs: [
                    { name: 'STOVE 1', cssClass: 'ngx-org-body_blue' },
                    { name: 'STOVE 2', cssClass: 'ngx-org-body_blue' },
                    { name: 'STOVE 3', cssClass: 'ngx-org-body_blue' }
                  ]
                },
                {
                  name: 'PBS#2 (TOTAL)',
                  cssClass: 'ngx-org-body_blue',
                  childs: [
                    { name: 'BOILER 1', cssClass: 'ngx-org-body_blue' },
                    { name: 'BOILER 2', cssClass: 'ngx-org-body_blue' },
                    { name: 'BOILER 3', cssClass: 'ngx-org-body_blue' }
                  ]
                },
                {
                  name: 'COBP#1 (TOTAL)',
                  cssClass: 'ngx-org-body_blue',
                  childs: [
                    { name: 'N1 BLOCK', cssClass: 'ngx-org-body_blue' },
                    { name: 'N2 BLOCK', cssClass: 'ngx-org-body_blue' }
                  ]
                },
                {
                  name: 'FLARE',
                  cssClass: 'ngx-org-body_blue'
                },
                {
                  name: "MILL'S",
                  cssClass: 'ngx-org-body_blue'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  onNodeClick(event: any) {
    this.selectedNode = event;
    console.log('Selected Node:', event);
  }
}
