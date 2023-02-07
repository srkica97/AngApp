import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'quote-element',
  templateUrl: './quote-element.html',
  styleUrls: ['./quote-element.css']
})
export class QuoteElementComponent implements OnInit{

  @Input() text = 'Carpe diem'
  @Input() author = 'Horace'
  constructor() {
  }

  ngOnInit() {
  }
}
