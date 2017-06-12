import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { MaterializeModule } from 'ng2-materialize';

import {routes} from './app.router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
