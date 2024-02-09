import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  standalone: true,
  imports: [],
  templateUrl: './increment-decrement.component.html',
  styleUrl: './increment-decrement.component.css'
})
export class IncrementDecrementComponent {
  val: number = 0;

  onIncrement() {
    this.val = this.val + 1
  }

  onDecrement() {
    this.val = this.val - 1
  }
}
