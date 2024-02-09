import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TogglePracticeComponent } from './toggle-practice/toggle-practice.component';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TogglePracticeComponent, IncrementDecrementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular-v1';
}
