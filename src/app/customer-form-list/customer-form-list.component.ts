import { Component } from '@angular/core';
import { Customer } from '../models/Customer';
import { FastapiService } from '../services/fastapi.service';

@Component({
  selector: 'app-customer-form-list',
  templateUrl: './customer-form-list.component.html',
  styleUrls: ['./customer-form-list.component.css']
})

export class CustomerFormListComponent {
  titulo:string = "Customer Form";
  clientes:Customer[]=[];

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

  constructor(private dataService: FastapiService) {}

  ngOnInit(): void {

    this.dataService.getCustomers().subscribe(
      (response:any) => {

        this.clientes = Object.values(response['result'])
        
    });
  }

  onDelete(index:number){
    this.dataService.eliminarCustomer(index).subscribe(
      response => { console.log("Se ha eliminado el cliente: " + response);
    },
      error => console.log("Error: " + error),
    );
  }


  registrarUsuario(){
      const miCliente = new Customer();
      miCliente.cus_id = this.clientes.length+1;
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
      
    console.log(miCliente);
    
    this.dataService.registrarCustomer(miCliente).subscribe(
      response => { console.log("Se ha guardado el empleado: " + response);
    },
      error => { console.log("Error: " + error);
    },);
    this.clientes.push(miCliente);
    console.log(this.clientes);
  }
}
