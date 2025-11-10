import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    // for Time & Date
    hourTransform = '';
    minuteTransform = '';
    secondTransform = '';

  constructor(private router: Router) { }
  isDark = false;
  dropdownOpen = false;


    // for Time & Date
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
  
  goToRoute(path: string) {
    console.log(path);

    this.router.navigate([path]);
  }
  
  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }

  toggleDropdown(event: MouseEvent) {
    this.dropdownOpen = !this.dropdownOpen;
    event.stopPropagation();
  }

  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }

}
