import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtLexApiService } from './services/api/et-lex-api.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PrefixInterceptor } from './services/interceptors/prefix.interceptor';
import { ContainersModule } from './containers/containers.module';
import { StatesService } from './services/states/states.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ContainersModule,
        ComponentsModule,
        ReactiveFormsModule.withConfig({ callSetDisabledState: 'whenDisabledForLegacyCode' })], providers: [
        EtLexApiService,
        StatesService,
        { provide: HTTP_INTERCEPTORS, useClass: PrefixInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
