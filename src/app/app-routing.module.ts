import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,},
  { path: 'chapter1', loadChildren:() => import ('./chapter1/chapter1.module').then(m => m.Chapter1Module) },
  { path: 'chapter2', loadChildren:() => import ('./chapter2/chapter2.module').then(m => m.Chapter2Module) },
  { path: 'chapter3', loadChildren:() => import ('./chapter3/chapter3.module').then(m => m.Chapter3Module) },
  { path: 'chapter4', loadChildren:() => import ('./chapter4/chapter4.module').then(m => m.Chapter4Module) },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
