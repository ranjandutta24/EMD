import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

// const baseURL = 'http://10.150.6.15:4060/api/';
const baseURL = 'http://59.97.132.209:4060/api/';

// http://localhost:4020/api/ccas/comp1

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor(private zone: NgZone) {}

  getBf5(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'emd/bf5');

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

  getmills(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'emd/mills');

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
  getstove(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'emd/stove');

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
  getpbs2(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'emd/pbs2');

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
  getsldcp(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'emd/ldcp');

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
  getcob11(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(baseURL + 'emd/cob11');

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
}
