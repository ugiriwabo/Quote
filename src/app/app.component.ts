import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote';
  quotes = [
    new Quote(1,'Watch Finding Nemo','Consolee','description',0 , 0),
    new Quote(2,'Buy Cookies','Consolee','description',0 , 0),
    new Quote(3, 'Get new Phone Case','Consolee','description',0 , 0),
    new Quote(4, 'Get Dog Food','Consolee','description',0 , 0),
    new Quote(5, 'Solve math homework','Consolee','description',0 , 0),
    new Quote(6, 'Plot my world domination plan','Consolee','description',0 , 0),

]
}
