import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'Watch Finding Nemo','Consolee','description',0 , 0),
    new Quote(2,'Buy Cookies','Consolee','description',0 , 0),
    new Quote(3, 'Get new Phone Case','Consolee','description',0 , 0),
    new Quote(4, 'Get Dog Food','Consolee','description',0 , 0),
    new Quote(5, 'Solve math homework','Consolee','description',0 , 0),
    new Quote(6, 'Plot my world domination plan','Consolee','description',0 , 0),

  ]

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit() {
  }

  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  deleteGoal(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
}
