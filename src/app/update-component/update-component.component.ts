import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/Customer';
import { FastapiService } from '../services/fastapi.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent {

  clientes:Customer[]=[];
  customer:any;

  cus_corporatename:any;
  cus_commercialname:any;
  cus_entity:any;
  cus_country:any;
  cus_alias:any;
  cus_taxid:any;
  cus_taxidtype:any;
  cus_unknown:any;
  cur_cus_fk:any;
  tas_cus_fk:any;
  pam_cus_fk:any;

  index:any;

  constructor(private dataService: FastapiService, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.dataService.getCustomers().subscribe(
      (response:any) => {
        this.clientes = Object.values(response['result'])
        //console.log(this.clientes);
    });

    this.index = this.route.snapshot.params['cus_id'];

    this.dataService.getCustomer(this.index).subscribe(
      (response:any) => {
        this.customer =  response['result'];
        
        this.cus_corporatename = this.customer.cus_corporatename;
        this.cus_commercialname = this.customer.cus_commercialname;
        this.cus_entity = this.customer.cus_entity;
        this.cus_country = this.customer.cus_country;
        this.cus_alias = this.customer.cus_alias;
        this.cus_taxid = this.customer.cus_taxid;
        this.cus_taxidtype = this.customer.cus_taxidtype;
        this.cus_unknown = this.customer.cus_unknown;
        this.cur_cus_fk = this.customer.cur_cus_fk;
        this.tas_cus_fk = this.customer.tas_cus_fk;
        this.pam_cus_fk = this.customer.pam_cus_fk;
    });

    
  
  }

  updateCustomer(){
    const miCliente = this.clientes[this.index]
      miCliente.cus_corporatename = this.cus_corporatename;
      miCliente.cus_commercialname = this.cus_commercialname;
      miCliente.cus_entity = this.cus_entity;
      miCliente.cus_country = this.cus_country;
      miCliente.cus_alias = this.cus_alias;
      miCliente.cus_taxid = this.cus_taxid;
      miCliente.cus_taxidtype = this.cus_taxidtype;
      miCliente.cus_unknown = this.cus_unknown;
      miCliente.cur_cus_fk = this.cur_cus_fk;
      miCliente.tas_cus_fk = this.tas_cus_fk;
      miCliente.pam_cus_fk = this.pam_cus_fk;
    this.dataService.actualizarCustomer(this.index,miCliente).subscribe(
      response => { console.log("Se ha modificado el cliente: " + response);
    },
      error => console.log("Error: " + error),
    );
  }
}
