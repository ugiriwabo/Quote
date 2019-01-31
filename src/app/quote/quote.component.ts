import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'.Do not worry about failures, worry about the chances you miss when you do not even try.','Consolee','description',0 , 0 ,new Date() ),
    new Quote(2,'.There is no security on the Earth, there is only opportunity.','Consolee','description',0 , 0 ,new Date() ),
    new Quote(3,'.Once you replace negative thoughts with positive ones, you will start having positive results.','Consolee','description',0 , 0 ,new Date()),
    new Quote(4,'.Nothing works better than just improving your product.','Consolee','description',0 , 0 ,new Date() ),
    new Quote(5,'.Build your own dreams, or someone else will hire you to build theirs.','Consolee','description',0 , 0 ,new Date()),
  
  ]

  addQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit() {
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
}
