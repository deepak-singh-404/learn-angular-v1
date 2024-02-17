import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-practice',
  standalone: true,
  imports: [],
  templateUrl: './toggle-practice.component.html',
  styleUrl: './toggle-practice.component.css'
})
export class TogglePracticeComponent {
  isToggle: boolean = true;

  setToggle() {
    this.isToggle = !this.isToggle
  }
}
