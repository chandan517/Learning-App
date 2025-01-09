import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentdata: string = "hello from parent";
  message: string = "";

  receivemsg(data: string) {
    console.log('Received from child: ', data);
    this.message = data;
  }

}
