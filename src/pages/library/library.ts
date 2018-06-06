import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection: Array<{category: string, quotes: Array<Quote>, icon: string}>;

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
