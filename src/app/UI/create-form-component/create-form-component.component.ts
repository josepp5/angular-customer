import { Component } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { Customer } from 'src/app/models/Customer';
import { PaymentMethod } from 'src/app/models/PaymentMethod';
import { TaxSystem } from 'src/app/models/TaxSystem';
import { FastapiService } from 'src/app/services/fastapi.service';

@Component({
  selector: 'app-create-form-component',
  templateUrl: './create-form-component.component.html',
  styleUrls: ['./create-form-component.component.css']
})
export class CreateFormComponentComponent {
  titulo:string = "Customer Form";
  clientes:Customer[]=[];
  countries:Country[]=[];
  taxSystems:TaxSystem[]=[];
  paymentMethods:PaymentMethod[]=[];

  entities: { [key: string]: string } = {
    "1" : "Fisica",
    "2" : "Juridica"
  }
  currencies: { [key: string]: string } = {
    "1": "EUR",
    "2": "USD"
  }
  tipoIDFiscal: { [key: string]: string } = {
    '02': 'NIF-IVA',
    '03': 'Pasaporte',
    '04': 'Doc. Oficial.exp.Pais de residencia',
    '05': 'Certificado de residencia',
    '06': 'Otro doc.probatorio',
    '07': 'No censado',
    '08': 'Intracomunitario sin VIES',
  };
  tipoCliente: { [key: string]: string } = {
    "1": 'Esporadico',
    "2": 'Habitual',
    "3": 'Profesional'
  };

  cus_corporatename:any;
  cus_commercialname:any;
  cus_entity:any;
  cca_cus_fk:any;
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
        console.log(this.clientes); 
    });

    this.dataService.getCountries().subscribe(
      (response:any) => {
        this.countries = Object.values(response['result'])
        console.log(this.countries);
    });

    this.dataService.getTaxSystems().subscribe(
      (response:any) => {
        this.taxSystems = Object.values(response['result'])
        console.log(this.taxSystems);
    });

    this.dataService.getPaymentMethods().subscribe(
      (response:any) => {
        this.paymentMethods = Object.values(response['result'])
        console.log(this.paymentMethods);
    });
  }


  registrarUsuario(){
    const miCliente = new Customer();
    miCliente.cus_id = this.clientes.length+1;
    miCliente.cus_corporatename = this.cus_corporatename;
    miCliente.cus_commercialname = this.cus_commercialname;
    miCliente.cus_country = this.cus_country;
    miCliente.cus_alias = this.cus_alias;
    miCliente.cus_taxid = this.cus_taxid;
    miCliente.cus_taxidtype = this.cus_taxidtype;
    miCliente.cus_unknown = this.cus_unknown;
    miCliente.cur_cus_fk = this.cur_cus_fk;
    miCliente.tas_cus_fk = this.tas_cus_fk;
    miCliente.cca_cus_fk = this.cca_cus_fk;
    miCliente.pam_cus_fk = this.pam_cus_fk;
    miCliente.cus_entity = this.cus_entity;
    //if (this.cus_entity == "Fisica") miCliente.cus_entity = 1; else miCliente.cus_entity = 2
    
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
