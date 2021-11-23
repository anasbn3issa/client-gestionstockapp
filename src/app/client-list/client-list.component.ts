import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../models/client';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  listClients: Client[];

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    //this.listClients = this.clientService.getClientsTest();
    //console.log(this.listClients);

    this.clientService.getClients().subscribe(
      (data) => {
        this.listClients = data;
        console.log(this.listClients);
      }
    );
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id);
  }
  /*detailsClient(id: number) {

  }*/

}
