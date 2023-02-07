import { Component } from '@angular/core';
import {Quote} from "./quote.model";
import {QuotesServices} from "./quotes.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuotesServices]
})
export class AppComponent {
  //title = 'AngApp';

  //quotes: Quote[] = [new Quote('Carpe diem', 'heroca'),
  //                    new Quote('Carpe diem1', 'heroca1')];

  addQuote(quote: Quote) {
    //this.quotes.push(quote);
  }



  show = true;
}

