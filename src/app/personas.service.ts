import { Persona } from './persona.model';
import { Logger } from './logger.service';
import { Injectable } from '@angular/core';


@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Juan", "Pérez"),
        new Persona("Laura", "Juárez")
    ];
    constructor(private log:Logger){  }

    agregarPersona(persona:Persona){
         this.log.envMens("agregando: " +persona.nombre+" "+persona.apellido);
         this.personas.push(persona);
      }
}