import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TogglePracticeComponent } from './toggle-practice/toggle-practice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TogglePracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular-v1';
}
