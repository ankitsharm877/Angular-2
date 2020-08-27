import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit ,
  DoCheck, OnChanges, OnDestroy, OnInit,  Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,
  AfterViewInit,AfterViewChecked {
  title = 'component-lifecycle-methods';

  displayChild: boolean=false;
 
  constructor() {
    console.log("AppComponent:Constructor");
  }
 
  toggle() {
    this.displayChild=!this.displayChild;
  }
 
  ngOnChanges() {
    //call when @Input change 
    console.log("AppComponent:OnChanges");
  }
 
 
  ngOnInit() {
    //call you add initialisation logic
    console.log("AppComponent:OnInit");
  }
 
  ngDoCheck() {
    //call on every change made to the component properties 
    console.log("AppComponent:DoCheck");
  }
 
   ngAfterContentInit() {
     //call after component's content has been fully initialized
    console.log("AppComponent:AfterContentInit");
  }
 
  ngAfterContentChecked() {
    //call after the components content is checked by the angular's change detection module
    console.log("AppComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    //call after initialize the component's views and all its child views 
    console.log("AppComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }
}
