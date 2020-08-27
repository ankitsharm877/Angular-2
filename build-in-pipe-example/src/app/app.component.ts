import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'build-in-pipe-example';
  todate : Date = new Date();
  name: string = 'Ankit Sharma'
  msg: string ='Welcome to Angular 2';
  num1: number = 9542.14556;
  per: number= .74142;
  cur:number=175;


}
