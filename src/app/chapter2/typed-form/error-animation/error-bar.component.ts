import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-bar',
  template: `
    <div class="bar" [style.width.%]="error | getPerc"></div>
  `,
  styles: [`
    .bar {
      background: grey;
      width: 100%;
      height: 4px;
      border-radius: 10px;
      margin: 5px;
      transition: width 0.5s ease-in-out;
    }
  `]
})
export class ErrorBarComponent {

  @Input() error: { actualLength: number, requiredLength: number } | null = null;

}
