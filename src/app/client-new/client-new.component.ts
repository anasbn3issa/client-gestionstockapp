import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  myForm: FormGroup;
  clientToAdd: Client;
  constructor() { }

  ngOnInit(): void { 
    this.myForm = new FormGroup({
      idClient: new FormControl('',[Validators.required]),
      nom: new FormControl('',[Validators.required,Validators.minLength(3)]),
      prenom: new FormControl('',[Validators.required,Validators.minLength(3)]),
      dateDeNaissance: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      profession: new FormControl('',[Validators.required]),
      categorieClient: new FormControl('',[Validators.required]),

  });
  this.clientToAdd = new Client();

  }
  get myIdClient() {
    return this.myForm.get('idClient');
  }

  get myNom() {
    return this.myForm.get('nom');
  }

  get myPrenom() {
    return this.myForm.get('prenom');
  }
  get myDateDeNaissance() {
    return this.myForm.get('dateDeNaissance');
  }
  get myPassword() { 
    return this.myForm.get('password');
  }
  get myEmail() {
    return this.myForm.get('email');
  }
  get myProfession() {
    return this.myForm.get('profession');
  }
  get myCategorieClient() {
    return this.myForm.get('categorieClient');
  }
  addClient() {
    this.myForm.reset();
  }
}