import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

@Component({
  selector: 'app-gas_balance',
  templateUrl: './gas_balance.component.html',
  styleUrls: ['./gas_balance.component.scss'],
})
export class GasBalanceComponent implements OnInit {
  nodes: any = [
    {
      name: 'COB#11',
      cssClass: 'ngx-org-head',
      image: '',
      title: 'title',
      childs: [
        {
          name: 'MAKE',
          cssClass: 'ngx-org-body',
          // image: 'assets/node.svg',
          title: '(NM3/HR)',
          childs: [
            {
              name: 'U/F (TOTAL)',
              cssClass: 'ngx-org-body_uf',

              title: 'title',
              childs: [
                {
                  name: 'N1',
                  cssClass: 'ngx-org-body_uf',

                  title: 'title',
                },
                {
                  name: 'N2',
                  cssClass: 'ngx-org-body_uf',

                  title: 'title',
                },
              ],
            },
            {
              name: 'PBS#2',
              cssClass: 'ngx-org-body_pbs',

              title: 'title',
              childs: [
                {
                  name: 'BOILER1',
                  cssClass: 'ngx-org-body_pbs',

                  title: 'title',
                },
                {
                  name: 'BOILER2',
                  cssClass: 'ngx-org-body_pbs',

                  title: 'title',
                },
                {
                  name: 'BOILER3',
                  cssClass: 'ngx-org-body_pbs',

                  title: 'title',
                },
              ],
            },

            {
              name: 'LDCP',
              cssClass: 'ngx-org-body_ldcp',

              title: 'title',
              childs: [
                {
                  name: 'KILN 1',
                  cssClass: 'ngx-org-body_ldcp',

                  title: 'title',
                },
                {
                  name: 'KILN 2',
                  cssClass: 'ngx-org-body_ldcp',

                  title: 'title',
                },
                {
                  name: 'KILN 3',
                  cssClass: 'ngx-org-body_ldcp',

                  title: 'title',
                },
                {
                  name: 'KILN 4',
                  cssClass: 'ngx-org-body_ldcp',

                  title: 'title',
                },
              ],
            },

            {
              name: 'MILLS',
              cssClass: 'ngx-org-body',

              title: 'title',
              childs: [],
            },
            {
              name: 'MISC',
              cssClass: 'ngx-org-body',

              title: 'title',
              childs: [],
            },
            {
              name: 'BF#5',
              cssClass: 'ngx-org-body',

              title: 'title',
              childs: [],
            },
            {
              name: 'BOF & CCP',
              cssClass: 'ngx-org-body',

              title: 'title',
              childs: [],
            },
            {
              name: 'Sinter',
              cssClass: 'ngx-org-body_sp',

              title: 'title',
              childs: [
                {
                  name: 'SP1',
                  cssClass: 'ngx-org-body_sp',

                  title: 'title',
                },
                {
                  name: 'SP2',
                  cssClass: 'ngx-org-body_sp',

                  title: 'title',
                },
              ],
            },
          ],
        },

        {
          name: 'PRESSURE',
          cssClass: 'ngx-org-body',
          // image: 'assets/node.svg',
          title: '(mmwc)',
        },
      ],
    },
  ];
  constructor(private sseService: SseService) {}
  ngOnInit(): void {}
}
