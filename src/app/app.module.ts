import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtLexApiService } from './api/et-lex-api.service';
import { TopicsService } from './services/topics/topics.service';
import { HomeComponent } from './features/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PrefixInterceptor } from './services/interceptors/prefix.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EtLexApiService,
    TopicsService,
    { provide: HTTP_INTERCEPTORS, useClass: PrefixInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
