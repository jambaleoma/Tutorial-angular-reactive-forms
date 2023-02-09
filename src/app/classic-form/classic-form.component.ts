import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-classic-form',
  template: `
   <input type="text" #myInput>

   <footer class="text-center text-lg-start fixed-bottom">
    <div class="text-center p-3">
      <button type="button" class="btn btn-primary p-2" (click)="goToHome()">Home</button>
    </div>
  </footer>
  `,
  styles: [
  ]
})
export class ClassicFormComponent implements AfterViewInit {
  @ViewChild('myInput') input!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    fromEvent(this.input?.nativeElement, 'input')
      .pipe(
        map(e => (e.currentTarget as HTMLInputElement).value)
      )
      .subscribe(text => {
        console.log(text);
      });
  }
  
  goToHome() {
    this.router.navigateByUrl('home');
  }
}
