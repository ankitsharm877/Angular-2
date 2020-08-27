import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nesting-component-output-example';

  onNotify(message: string): void{
    alert(message);
  }



}
