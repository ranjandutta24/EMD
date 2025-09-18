import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://10.150.6.15:4060/api/';
// const baseURL = 'http://59.97.132.209:4060/api/';

// http://localhost:4020/api/ccas/comp1

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor(private zone: NgZone) {}

  getServerSentEvent(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'utility/ccas_dashboard');

      eventSource.onmessage = (event) => {
        this.zone.run(() => {
          observer.next(JSON.parse(event.data));
        });
      };

      eventSource.onerror = (error) => {
        this.zone.run(() => {
          observer.error(error);
        });
      };

      return () => {
        eventSource.close();
      };
    });
  }

  // getSSETrend(): Observable<any> {
  //   return new Observable((observer) => {
  //     const eventSource = new EventSource(baseURL + 'utility/ccas_trend');

  //     // if you used "event: trend"
  //     eventSource.addEventListener('trend', (event: any) => {
  //       observer.next(JSON.parse(event.data));
  //     });

  //     eventSource.onerror = (err) => {
  //       observer.error(err);
  //       eventSource.close();
  //     };

  //     return () => eventSource.close();
  //   });
  // }

  getSSETrend(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'utility/ccas_trend');

      eventSource.onmessage = (event) => {
        this.zone.run(() => {
          observer.next(JSON.parse(event.data));
        });
      };

      eventSource.onerror = (error) => {
        this.zone.run(() => {
          observer.error(error);
        });
      };

      return () => {
        eventSource.close();
      };
    });
  }
  getSSEbyshop(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'utility/ccas_byshop');

      eventSource.onmessage = (event) => {
        this.zone.run(() => {
          observer.next(JSON.parse(event.data));
        });
      };

      eventSource.onerror = (error) => {
        this.zone.run(() => {
          observer.error(error);
        });
      };

      return () => {
        eventSource.close();
      };
    });
  }
}

AI_6_COMP1: 0;
AI_6_COMP2: 21060;
AI_6_COMP3: 0;
AI_6_COMP4: 0;
AI_6_COMP5: 18227;
AI_6_COMP6: 0;
COMP_AIR_FLOW: null;
COMP_AIR_PRESSURE: null;
FT56A_SCL: 18250;
FT56_SCL: 24475;
INST_AIR_F: 569.8775024414062;
INST_AIR_P: 5.407839298248291;
INST_F: 2078.013916015625;
INST_P: 5.287075996398926;
MOTOR_CURR_COMP1: 0;
MOTOR_CURR_COMP2: 231;
MOTOR_CURR_COMP3: 0;
MOTOR_CURR_COMP4: 0;
MOTOR_CURR_COMP5: 221;
MOTOR_CURR_COMP6: 0;
PLANT_AIR_F: null;
PLANT_AIR_P: 5.720330715179443;
PT161A_SCL: 6.860000133514404;
PT161_SCL: 6.690000057220459;
igca_flow: 863.5159301757812;
igca_pr: 5.087963104248047;
pbs_inst_airflow: 1384.013916015625;
pbs_inst_airpre: 5.325733661651611;
pgca_flow: 7264.83203125;
pgca_pr: 5.8333330154418945;
