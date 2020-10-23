import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtLexApiService } from './services/api/et-lex-api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PrefixInterceptor } from './services/interceptors/prefix.interceptor';
import { ContainersModule } from './containers/containers.module';
import { StatesService } from './services/states/states.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReplacerComponent } from './components/replacer/replacer.component';
import { createCustomElement } from '@angular/elements';
import { ExerciseService } from './containers/exercise/services/exercise/exercise.service';
import { GapWriteComponent } from './components/gap-write/gap-write.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ContainersModule,
  ],
  providers: [
    EtLexApiService,
    StatesService,
    { provide: HTTP_INTERCEPTORS, useClass: PrefixInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
