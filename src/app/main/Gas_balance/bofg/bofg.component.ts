import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bofg',
  templateUrl: './bofg.component.html',
  styleUrls: ['./bofg.component.scss']
})
export class BofgComponent implements OnInit {
  // nodes: any = [
  //   {
  //     name: 'BOFG',
  //     cssClass: 'ngx-org-head',
  //     title: '',
  //     childs: [
  //       {
  //         name: 'EXPORT VOL',
  //         cssClass: 'ngx-org-body_green',
  //         title: '',
  //         childs: [
  //           {
  //             name: 'PBS#2',
  //             cssClass: 'ngx-org-body_orange',
  //             title: '',
  //           },
  //           {
  //             name: 'MILLS',
  //             cssClass: 'ngx-org-body_orange',
  //             title: '',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];



  selectedNode: any = null;
  nodes: any = [
    {
      name: 'BOFG',
      cssClass: 'ngx-org-head',

      childs: [
        {
          name: 'EXPORT VOL',
          cssClass: 'ngx-org-body_orange',

          childs: [
            {
              name: 'PBS#2',
              cssClass: 'ngx-org-body_green',
            },
            {
              name: 'MILLS',
              cssClass: 'ngx-org-body_green',
            }
          ]
        },
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
