import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  //@Input() client : Client;
  client: Client;
  constructor() { }

  ngOnInit(): void {/*
    this.client.nom="BEN AISSA";
    this.client.prenom="Anas";
    this.client.profession="ss";
    this.client.idClient=69;
    this.client.dateDeNaissance="03/05/1999";
    this.client.categorieClient="Premium";*/
  }

}
