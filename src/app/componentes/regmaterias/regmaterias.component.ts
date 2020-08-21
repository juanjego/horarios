import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regmaterias',
  templateUrl: './regmaterias.component.html',
  styleUrls: ['./regmaterias.component.css']
})
export class RegmateriasComponent {

  rmaterias: FormGroup;

  public materias: Array<string> = [];
  item : string;
  public nombre: string="";
  public clave: string="";
  public grado: string="";
  public hora: string ="";
  public registro: string="";



  constructor(
    public rP: FormBuilder
  ) { 
    this.rmaterias = this.rP.group({
      nombre: ['', [Validators.required,Validators.minLength(5)]],
      clave: ['', [Validators.required]],
      grado: ['', [Validators.required]],
      hora: ['', [Validators.required,]]
    });
    
  }

  registrar(values){
    console.log(values);
}

guardarArray(){
  this.registro =  " Materia: " + this.nombre + " Clave " + this.clave  
  + " Grado: " + this.grado 
  + " Hora: "+ this.hora;
  this.materias.push(this.registro);
  
  localStorage.setItem('materias', JSON.stringify(this.materias));
  
  }
  
  mostrarArray(){
  this.materias = JSON.parse(localStorage.getItem('materias'));
  }
  empty() {
    //empty your array
    this.materias.length = 0;
  }
  
  onDelete(){
    this.empty();
    console.log(this.materias);
  }



}
