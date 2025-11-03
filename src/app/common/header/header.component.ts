import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  isDark = false;
  dropdownOpen = false;
  ngOnInit(): void { }

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

  // Navigate to sub components (e.g., BOFG, CBM, etc.)
  navigateToSubComponent(component: string) {
    this.router.navigate(['/main/gas_balance'], { queryParams: { view: component } });
    this.dropdownOpen = false; // ✅ Close dropdown after navigation
  }

  // Toggle dropdown visibility on click
  toggleDropdown(event: MouseEvent) {
    this.dropdownOpen = !this.dropdownOpen;
    event.stopPropagation(); // prevent document click from closing immediately
  }

  // Close dropdown when clicking outside
  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
  }

}
