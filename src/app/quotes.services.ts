import {Quote} from "./quote.model";

export class QuotesServices{

  quotes: Quote[] = [new Quote('q1','Carpe diem', 'heroca'),
    new Quote('q2', 'Carpe diem1', 'heroca1')];

  addQuote(quote: Quote) {
    this.quotes.push(quote);
  }
}
