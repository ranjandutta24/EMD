import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  hourTransform = '';
  minuteTransform = '';
  secondTransform = '';
  constructor() {}
  currentDateTime: Date = new Date();
  private intervalId: any;

  ngOnInit(): void {
    this.updateClock();
    this.intervalId = setInterval(() => {
      this.currentDateTime = new Date();
      this.updateClock();
    }, 1000); // update every second
  }
  today: Date = new Date();

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6; // 360/60
    const minuteDeg = minutes * 6 + seconds * 0.1; // smooth minute
    const hourDeg = hours * 30 + minutes * 0.5; // smooth hour

    this.secondTransform = `rotate(${secondDeg}deg)`;
    this.minuteTransform = `rotate(${minuteDeg}deg)`;
    this.hourTransform = `rotate(${hourDeg}deg)`;
  }
}
