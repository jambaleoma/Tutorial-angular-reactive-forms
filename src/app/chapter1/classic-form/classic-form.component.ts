import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-classic-form',
  template: `
   <input type="text" #myInput>
  `,
  styles: [
  ]
})
export class ClassicFormComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') input!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    const el = document.querySelector('input');

    if (el) {
      // APPROCCIO CLASSICO VANILLA JAVASCRIPT (TYPESCRIPT)
      el.addEventListener('input', (e) => {
        console.log('ADD EVENT LISTENER', (e.currentTarget as HTMLInputElement).value);
      });
  
      // APPROCCIO CON RXJS
      fromEvent(el, 'input')
        .subscribe(e => {
          console.log('RXJS', (e.currentTarget as HTMLInputElement).value);
        });
      
      // APPROCCIO CON RXJS PIPE-MAP
      fromEvent(el, 'input')
        .pipe(
          map(e => (e.currentTarget as HTMLInputElement).value)
        )
        .subscribe(text => {
          console.log('RXJS PIPE-MAP', text);
        });
  
      // APPROCCIO CON RXJS PIPE-MAP-FILTER
      fromEvent(el, 'input')
        .pipe(
          map(e => (e.currentTarget as HTMLInputElement).value),
          filter(text => text.length > 3)
        )
        .subscribe(text => {
          console.log('RXJS PIPE-MAP-FILTER', text);
        });
    }
  }

  // APPROCCIO CON RXJS PIPE-MAP
  ngAfterViewInit(): void {
    fromEvent(this.input?.nativeElement, 'input')
      .pipe(
        map(e => (e.currentTarget as HTMLInputElement).value)
      )
      .subscribe(text => {
        console.log('RXJS PIPE-MAP (ViewChild)', text);
      });
  }

}
