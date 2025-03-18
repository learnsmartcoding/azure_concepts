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


<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".js" mimeType="application/javascript" />
      <mimeMap fileExtension=".css" mimeType="text/css" />
    </staticContent>
  </system.webServer>
</configuration>
icacls "C:\path\to\your\UI" /grant IIS_IUSRS:F /T
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".js" mimeType="application/javascript" />
      <mimeMap fileExtension=".css" mimeType="text/css" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
    </staticContent>
    <handlers>
      <add name="StaticFile" path="*" verb="*" modules="StaticFileModule" resourceType="File" />
    </handlers>
  </system.webServer>
</configuration>


  5. IIS Logs & Event Viewer for More Clarity
If the issue persists:

Check IIS logs (C:\inetpub\logs\LogFiles).
Check Event Viewer (eventvwr.msc) under Windows Logs → Application for any errors.

  Final Debugging Steps
Try accessing a simple static file (like test.txt) inside the UI folder.
If test.txt works but index.html fails, it's likely a configuration issue.
If everything fails, try temporarily moving the UI folder to another location and update IIS to serve from there.
