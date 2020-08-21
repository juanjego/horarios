import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CssComponent } from './componentes/css/css.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import {FormsModule} from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { HorariosComponent } from './componentes/horarios/horarios.component';
import { EspaciosComponent } from './componentes/espacios/espacios.component';
import { MateriasComponent } from './componentes/materias/materias.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { RegistroComponent } from './componentes/registro/registro.component';
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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
