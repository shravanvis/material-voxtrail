import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },

    { path: '/vehicles-list', title: 'Vehicles List',  icon: 'directions_car', class: '' },
    { path: '/tracking', title: 'Tracking',  icon: 'dashboard', class: '' },
    { path: '/reports', title: 'Reports',  icon: 'dashboard', class: '' },
    { path: '/history', title: 'History',  icon: 'history', class: '' },
    { path: '/geo-fence', title: 'Geo-Fence',  icon: 'dashboard', class: '' },

    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    { path: '/settings', title: 'Settings',  icon: 'settings', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
