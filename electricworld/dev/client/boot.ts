///<reference path="../../node_modules/angular2-in-memory-web-api/typings/browser.d.ts"/>
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ROUTER_PROVIDERS } from '@angular/router';
import 'rxjs/Rx';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);