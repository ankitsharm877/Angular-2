import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-example';

 appList: any[] =[{
  "Id":"1",
  "Name":"one"
  },
  {
    "Id":"2",
    "Name":"two"
  }];
  num: number = 0;
}
