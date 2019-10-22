import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: ContentDetailsComponent },
{
  path: 'login',
  component: AuthComponent
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
