import { Component } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { Customer } from 'src/app/models/Customer';
import { PaymentMethod } from 'src/app/models/PaymentMethod';
import { TaxSystem } from 'src/app/models/TaxSystem';
import { FastapiService } from 'src/app/services/fastapi.service';

@Component({
  selector: 'app-customer-list-component',
  templateUrl: './customer-list-component.component.html',
  styleUrls: ['./customer-list-component.component.css']
})
export class CustomerListComponentComponent {
  titulo:String = "My Customers"
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
        this.clientes.sort((a, b) => a.cus_id - b.cus_id);
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

  onDelete(index:number){
    this.dataService.eliminarCustomer(index).subscribe(
      response => { console.log("Se ha eliminado el cliente: " + response);
    },
      error => console.log("Error: " + error),
    );
  }
}
