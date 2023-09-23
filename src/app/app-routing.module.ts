import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

//Array con las rutas
const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  { path: 'inicio', component: DashboardComponent },
  { path: 'inicio-sesion', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
