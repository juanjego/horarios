import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CssComponent } from './componentes/css/css.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { HorariosComponent } from './componentes/horarios/horarios.component';
import { EspaciosComponent } from './componentes/espacios/espacios.component';
import { MateriasComponent } from './componentes/materias/materias.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegprofesoresComponent } from './componentes/regprofesores/regprofesores.component';
import { RegmateriasComponent } from './componentes/regmaterias/regmaterias.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CssComponent,
    NavComponent,
    HomeComponent,
    HorariosComponent,
    EspaciosComponent,
    MateriasComponent,
    ProfesoresComponent,
    RegistroComponent,
    RegprofesoresComponent,
    RegmateriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
