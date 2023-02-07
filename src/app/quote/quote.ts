import {Component} from '@angular/core'
import {QuotesServices} from "../quotes.services";
import {Quote} from "../quote.model";
import {Router} from "@angular/router";

@Component({
  selector: 'quote',
  templateUrl: './quote.html',
  styleUrls: ['./quote.css']
})

export class QuoteComponent{

  constructor(private quotesService: QuotesServices, private router: Router) {
    this.quotes = this.quotesService.quotes;
  }

  quotes: Quote[] = this.quotesService.quotes;

  onAddQuote(): void{
    this.router.navigateByUrl( '/quotes/new');
  }

  onEditQuote(quote: Quote): void{
    this.router.navigate(['quotes', quote.id, 'edit'],
      {queryParams: {text: quote.text, author: quote.author}});
  }

}
