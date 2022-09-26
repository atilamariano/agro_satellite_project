import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { FarmComponent } from './farm/farm.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegisterComponent } from './register/register.component'
import { DetailsComponent } from './details/details.component'


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'farm', component: FarmComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
