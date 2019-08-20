import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent implements OnInit {

  nombre: string;
  correo: string;
  textAreaMsj: string;

  constructor() {
   
   }

  ngOnInit() {  }

  enviarMsj(form: NgForm){
  
    console.log("hola "+form.value.nombre );
    console.log("hola "+form.value.correo );
    console.log("hola "+form.value.textAreaMsj );
  
    form.value.nombre;
    form.value.correo;
    form.value.textAreaMsj;
    this.nombre = "";
    this.correo = "";
    this.textAreaMsj = "";
  }
  
 
}
