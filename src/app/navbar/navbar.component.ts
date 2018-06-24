import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tabLinks: any[];

  constructor(private router: Router) {
    this.tabLinks = [
      {
          label: 'Home',
          value: 'Home',
          index: 0
      }, {
          label: 'Orders',
          value: 'Orders',
          index: 1
      }, {
          label: 'Product',
          value: 'Product',
          index: 2
      }
    ];
  }

  ngOnInit() {
  }

}
