import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importamos la configuración de rutas que hemos creado anteriormente
import { routing, appRoutingProviders } from './app.routing';

// Importamos los componentes
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { whoAmIComponent } from './about-us/whoAmI.component';
import { serviceComponent } from './service/service.component';
import { contactComponent } from './contact/contact.component';
import { methodologyComponent } from './methodology/methodology.component';


import { SwiperModule } from 'angular2-useful-swiper';

@NgModule( {
  declarations: [
    AppComponent,
    homeComponent,
    whoAmIComponent,
    serviceComponent,
    contactComponent,
    
  ],
  imports: [
    routing,
    BrowserModule,
    SwiperModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}


