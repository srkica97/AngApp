import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {AppFormComponent} from "./App-form/App-form";
import {FormsModule} from "@angular/forms";
import {QuoteElementComponent} from "./Quote-element/quote-element";
import {HomeComponent} from "./home/home";
import {FunFactsComponent} from "./fun-facts/fun-facts";
import {QuoteComponent} from "./quote/quote";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent, HeaderComponent,AppFormComponent,QuoteElementComponent, HomeComponent, FunFactsComponent,QuoteComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
