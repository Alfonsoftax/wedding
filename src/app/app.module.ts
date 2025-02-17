import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { EventsComponent } from './events/events.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoDropdownComponent } from './info-dropdown/info-dropdown.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TransportComponent } from './transport/transport.component';
import { InitComponent } from './init/init.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    EventsComponent,
    CarouselComponent,
    InfoDropdownComponent,
    ConfirmationComponent,
    TransportComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
