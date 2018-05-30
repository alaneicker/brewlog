import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/header/header.module';

import { AppService } from './services/app.service';
import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HeaderModule,
    ],
    providers: [
        AppService,
        HttpService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
