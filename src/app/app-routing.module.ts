import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColorComponent} from './color/color.component';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {FrontComponent} from './front/front.component';
import {BackComponent} from './back/back.component';
import {NF404Component} from './nf404/nf404.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: 'todo',
        component: TodoComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'color',
        component: ColorComponent
      },
      {
        path: 'cv',
        children : [
          {
            path: ':id',
            component: DetailPersonneComponent
          },
          {
            path: '',
            component: CvComponent
          },
        ]
      },
      {
        path: '',
        component: CvComponent
      },

    ]
  },
  {
    path: 'admin',
    component: BackComponent,
    canActivate: [AuthGuard],
    children: [
    ]
  },
  {
    path: '**', component: NF404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
