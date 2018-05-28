import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppService } from './services/app.service';
import { HttpService } from './services/http.service';
import { DataStorageService } from './services/data-storage.service';

import { HeaderModule } from './components/header/header.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddBeerFormComponent } from './components/add-beer-form/add-beer-form.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderModule,
    ],
    providers: [
        AppService,
        HttpService,
        DataStorageService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
