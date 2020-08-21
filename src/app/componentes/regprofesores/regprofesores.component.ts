import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regprofesores',
  templateUrl: './regprofesores.component.html',
  styleUrls: ['./regprofesores.component.css']
})
export class RegprofesoresComponent {

  rprofesores: FormGroup;

  public profesores: Array<string> = [];
  item : string;
  public nombre: string="";
  public apellidos: string="";
  public titulo: string="";
  public tipo: string ="";
  public entrada:  string;
  public salida: string="";
  public registro: string="";



  constructor(
    public rP: FormBuilder
  ) { 
    this.rprofesores = this.rP.group({
      nombre: ['', [Validators.required,Validators.minLength(3)]],
      apellidos: ['', [Validators.required,Validators.minLength(3)]],
      titulo: ['', [Validators.required,Validators.minLength(8)]],
      tipo: ['', [Validators.required,Validators.minLength(5)]],
      entrada: ['', [Validators.required]],
      salida: ['', [Validators.required]]
    });
    
  }

  registrar(values){
    console.log(values);
}

guardarArray(){
  this.registro =  " Profesor: " + this.nombre + " " + this.apellidos 
  + " Información General: " + this.titulo 
  + " Tiempo: "+ this.tipo 
  + " Horario de Entrada: " + this.entrada 
  +" Salida: " + this.salida;
  this.profesores.push(this.registro);
  
  localStorage.setItem('profesores', JSON.stringify(this.profesores));
  
  }
  
  mostrarArray(){
  this.profesores = JSON.parse(localStorage.getItem('profesores'));
  }
  empty() {
    //empty your array
    this.profesores.length = 0;
  }
  
  onDelete(){
    this.empty();
    console.log(this.profesores);
  }



}
