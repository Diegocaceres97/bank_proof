import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCommentsComponent } from './components/edit-comments/edit-comments.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { GuardianGuard } from './guardians/guardian.guard';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path:'main',
    component: MainComponent,
    canActivate:[GuardianGuard]
  }
  ,{
    path: 'main/edit',
    component: EditCommentsComponent,
    canActivate:[GuardianGuard]
  },
  {
    path: 'main/edit/:id',
    component: EditCommentsComponent,
    canActivate:[GuardianGuard]
  },{
    path: 'main/newComment',
    component: EditCommentsComponent,
    canActivate:[GuardianGuard]
  },
  {
    path: '**',
    component:NotFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
