import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private myHttp : HttpClient) { }
  getClientsTest() {
    return [
      {
        idClient: 1,
        categorieClient: 'Premium',
        dateDeNaissance: '01/01/2000',
        email: 'client@client.cc',
        nom: 'Ali',
        prenom: 'Client',
        password: 'client',
        profession: 'Client',
      },
      {
        idClient: 2,
        categorieClient: 'Premium',
        dateDeNaissance: '01/01/2002',
        email: 'client2@client.cc',
        nom: 'Client2',
        prenom: 'Client2',
        password: 'client2',
        profession: 'Client2',
      },
      {
        idClient: 3,
        categorieClient: 'Premium',
        dateDeNaissance: '01/01/2003',
        email: 'client3@client.cc',
        nom: 'Client3',
        prenom: 'Client3',
        password: 'client3',
        profession: 'Client3',
      }
    ]
  }

  getClients(): Observable<Client[]> {
    
    return this.myHttp.get<Client[]>('http://localhost:8089/SpringMVC/client/retrieve-all-clients');
    //return this.myHttp.get<Client[]>('/SpringMVC/client/retrieve-all-clients');
  }
  deleteClient (id:number){
    return this.myHttp.delete('/SpringMVC/client/delete/'+id);
  }
}
