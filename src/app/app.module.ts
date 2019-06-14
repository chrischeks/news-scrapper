import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PunchComponent } from './punch/punch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsDetailService } from './news-detail.service';
import { PunchDisplayComponent } from './punch-display/punch-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PunchComponent,
    NavbarComponent,
    PunchDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [NewsDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }