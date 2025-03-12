import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  v1Routes = ['/manage/console', '/manage/location']; // Routes that need to be redirected to v1

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects; // Get the final resolved URL
        const basePath = '/v2'; // Current base path

        if (this.v1Routes.some(route => currentUrl.startsWith(basePath + route))) {
          // Replace /v2/ with /v1/ and reload the app
          const newUrl = window.location.origin + '/v1' + currentUrl.replace(basePath, '');
          window.location.href = newUrl; // Full page reload
        }
      }
    });
  }
}
