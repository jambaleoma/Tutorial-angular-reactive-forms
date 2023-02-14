import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="d-grid gap-3">
      <div class="p-2 bg-light border botton-center-col">
        <h2>CAPITOLO 1</h2>
        <div>
          <button type="button" class="btn btn-primary p-2 mb-2" (click)="goToChapter(1)">
            Angular 15, RxJS 7 & Reactive Forms
          </button>
        </div>
      </div>
      <div class="p-2 bg-light border botton-center-col">
        <h2>CAPITOLO 2</h2>
        <div>
          <button type="button" class="btn btn-primary p-2 mb-2" (click)="goToChapter(2)">
            Typed Form Control
          </button>
        </div>
      </div>
      <div class="p-2 bg-light border botton-center-col">
        <h2>CAPITOLO 3</h2>
        <div>
          <button type="button" class="btn btn-primary p-2 mb-2" (click)="goToChapter(3)">
            Typed Form Group
          </button>
        </div>
      </div>
      <div class="p-2 bg-light border botton-center-col">
        <h2>CAPITOLO 4</h2>
        <div>
          <button type="button" class="btn btn-primary p-2 mb-2" (click)="goToChapter(4)">
            Reactive Forms & Angular Material
          </button>
        </div>
    </div>
  `,
  styles: [`
    .botton-center-col {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})
export class HomeComponent {
  constructor(
    private router: Router
  ) {}

  goToChapter(chapterNumber: number) {
    this.router.navigateByUrl('chapter' + chapterNumber);
  }
}
