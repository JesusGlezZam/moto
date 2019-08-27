import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/Services/dataServices';
import { NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/Models/vehicle.model';
import { TelEmergencia } from 'src/app/Models/telEmergencia.model';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  hoy = new Date();
  yyyy = this.hoy.getFullYear();
  modelos = [];


  editar: boolean = true;
  uid: string;

  bloodType: string;
  newAllergy: string;
  saludEdit: string[] = [];

  marca: string;
  subMarca: string;
  modelo: number;
  cc: number;
  placa: string;
  serie: string;
  aseguradora: string;
  poliza: string;
  telAseguradora: number;
  motosEdit: Vehicle[] = [];

  nameContact: string;
  parentesco: string;
  telContact: string;
  contactos: TelEmergencia[] = [];

  perfil = {};
  constructor(private dataServices: DataServices) { }

  async ngOnInit() {

    for (let index = 0; index < 50; index++) {
      this.modelos[index] = this.yyyy;
      this.yyyy--;
    }
    
    this.perfil = await this.dataServices.getPerfil();
    console.log(this.perfil);

  }
  addVehicle() {
    
    let moto: Vehicle = new Vehicle(this.marca, this.subMarca, this.modelo, this.placa,
                        this.cc, this.serie, this.aseguradora, this.poliza, this.telAseguradora);
    console.log(moto);
    this.motosEdit.push(moto);
    this.marca = "";
    this.subMarca = "";
    this.modelo = null;
    this.serie = "";
    this.cc = null;
    this.placa = "";
    this.aseguradora = "";
    this.poliza = "";
    this.telAseguradora = null;
  }
  delVehicle(indice: number){
    this.motosEdit.splice(indice, 1);
  }
  addAlergia() {
    
    if (this.newAllergy) {
      this.saludEdit.push(this.newAllergy);
      this.newAllergy = ""
      console.log(this.saludEdit);
    }

  }
  delAlergia(indice: number) {
    this.saludEdit.splice(indice, 1);
  }
  addContacto() {
    if (this.nameContact && this.telContact) {

      let telContacto = new TelEmergencia(this.nameContact, this.parentesco, this.telContact)
      this.contactos.push(telContacto);
      this.nameContact = "";
      this.parentesco = "";
      this.telContact = "";
    }

  }
  delContact(indice: number) {
    this.contactos.splice(indice, 1);
  }
}
