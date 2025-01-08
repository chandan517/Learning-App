import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../store/actions/counter.actions';
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';


@Component({
  selector: 'app-ngrx',
  imports: [AsyncPipe],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.scss'
})
export class NgrxComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count')); 
  }

  increment() {
    this.store.dispatch(increment()); 
  }

  decrement() {
    this.store.dispatch(decrement()); 
  }

  reset() {
    this.store.dispatch(reset()); 
  }
}
