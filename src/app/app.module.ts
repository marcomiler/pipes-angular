import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app de manera global
import localePE from '@angular/common/locales/es-PE';
import localeFR from '@angular/common/locales/fr';

import {registerLocaleData} from '@angular/common';
registerLocaleData(localePE);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue: 'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
