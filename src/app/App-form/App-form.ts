import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {Quote} from "../quote.model";
import {QuotesServices} from "../quotes.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './app-form.html',
  styleUrls: ['./app-form.css']
})
export class AppFormComponent implements OnInit{

  text = 'quote';
  author = 'author';
  //fullQuote = 'full quote';
  @Output() addedQuote = new EventEmitter<Quote>();

  constructor(private quotesService: QuotesServices, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.text = this.route.snapshot.queryParams['text'];
    this.author = this.route.snapshot.queryParams['author'];
  }

  onAddQuote(): void{
    console.log('Quote.added');
    //this.fullQuote = `'${this.text}' - ${this.author}`;
    //this.addedQuote.emit(new Quote(this.text, this.author));
    this.quotesService.addQuote(new Quote('q2', this.text, this.author));
  }
}
