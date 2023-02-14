import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
    <button mat-raised-button (click)="goTo('home')" style="width: 5px;">
      <img src="./../../assets/img/icon/angular.png" alt="" width="100%">
    </button>
    <span type="button" class="m-2" (click)="goTo('home')">Angular Reactive Forms</span>
    <span class="example-spacer"></span>
  </mat-toolbar>

  <div class="grid">
    <div class="row">
      <div class="col-md-3">
        <div class="text-center p-3">
          <!-- TODO: INSERIRE MENU ESPANDIBILE -->
        </div>
      </div>
      <div class="col-md-6">
        <div class="card m-2">
          <img class="card-img-top" src="./../assets/img/formImage.png" alt="Title">
          <div class="card-body">
            <router-outlet></router-outlet>
          </div>
        </div>  
      </div>
      <div class="col-md-3">
        <div class="text-center p-3">
          <!-- TODO: INSERIRE DESCRIZIONE -->
        </div>
      </div>
    </div>
  </div>
  <mat-menu #routingMenu="matMenu">
    <button mat-menu-item type="button" (click)="goTo('home')">
      <mat-icon>home</mat-icon>
      <span>Home</span>
    </button>
  </mat-menu>
  `,
  styles: []
})
export class AppComponent {

  constructor(
    private router: Router
  ) { }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
