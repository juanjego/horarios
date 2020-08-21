import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { HorariosComponent } from './componentes/horarios/horarios.component';
import { EspaciosComponent } from './componentes/espacios/espacios.component';
import { MateriasComponent } from './componentes/materias/materias.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]},
  {path: 'horarios', component: HorariosComponent, canActivate: [LoginGuard]},
  {path: 'espacios', component: EspaciosComponent, canActivate: [LoginGuard]},
  {path: 'materias', component: MateriasComponent, canActivate: [LoginGuard]},
  {path: 'profesores', component: ProfesoresComponent, canActivate: [LoginGuard]},
  {path: 'registro', component: RegistroComponent, canActivate: [NoLoginGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
