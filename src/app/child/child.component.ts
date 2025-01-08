import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() data!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    console.log("first")
    this.messageEvent.emit('this is from child component')
  }


}
