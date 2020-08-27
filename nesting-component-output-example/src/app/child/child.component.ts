import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    this.notify.emit('click from nested component');
  }

}
