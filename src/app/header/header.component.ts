import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router) {}
  menuType: String = 'default';
  sellerName: String = '';
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (localStorage.getItem('seller') && val.url.includes('seller')) {
        this.menuType = 'seller';
        let sellerStore = localStorage.getItem('seller');
        let sellerData = sellerStore && JSON.parse(sellerStore)[0];
        this.sellerName = sellerData.name;
      } else {
        this.menuType = 'default';
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}
