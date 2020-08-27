import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation 
  title = 'data-binding';
   getTitle(): string{
    return this.title;
  }
  //Property Binding
  paragraphTitle:string ='My App Title';
  imagepath:string='/images/logo.png';

  //Event Binding
  count:number = 0;
    add(){
      this.count = this.count + 1;
    }

  //two-way binding
  name:string = 'Hello';

}
