import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/Customer';
import { FastapiService } from '../services/fastapi.service';
import { Country } from '../models/Country';
import { TaxSystem } from '../models/TaxSystem';
import { PaymentMethod } from '../models/PaymentMethod';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent {

  titulo:string = "Update Customer Data";
  clientes:Customer[]=[];
  customer:Customer = new Customer()
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

  index:any;
  corporatename:any

  constructor(private dataService: FastapiService, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.dataService.getCustomers().subscribe(
      (response:any) => {
        this.clientes = Object.values(response['result'])
    });

    this.dataService.getCountries().subscribe(
      (response:any) => {
        this.countries = Object.values(response['result'])
    });

    this.dataService.getTaxSystems().subscribe(
      (response:any) => {
        this.taxSystems = Object.values(response['result'])
    });

    this.dataService.getPaymentMethods().subscribe(
      (response:any) => {
        this.paymentMethods = Object.values(response['result'])
    });

    this.index = this.route.snapshot.params['cus_id'];
    console.log(this.index);

    this.corporatename = this.route.snapshot.params['cus_corporatename'];
    console.log(this.corporatename);
    
    if(this.index!=undefined){
      this.dataService.getCustomer(this.index).subscribe(
        (response:any) => {
          this.customer =  response['result'];
          this.cus_corporatename = this.customer.cus_corporatename;
          this.cus_commercialname = this.customer.cus_commercialname;
          this.cca_cus_fk = this.customer.cca_cus_fk
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
    } else {
      this.dataService.getCustomer_by_corporatename(this.corporatename).subscribe(
        (response:any) => {
          this.customer =  response['result'];
          this.cus_corporatename = this.customer.cus_corporatename;
          this.cus_commercialname = this.customer.cus_commercialname;
          this.cca_cus_fk = this.customer.cca_cus_fk
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
  }

  updateCustomer() {
    console.log('this.index:', this.index);
    console.log('this.clientes:', this.clientes);
    console.log('this.customer:', this.customer);
    if (this.customer) {
      this.customer.cus_corporatename = this.cus_corporatename;
      this.customer.cus_commercialname = this.cus_commercialname;
      this.customer.cca_cus_fk = this.cca_cus_fk;
      this.customer.cus_entity = this.cus_entity;
      this.customer.cus_country = this.cus_country;
      this.customer.cus_alias = this.cus_alias;
      this.customer.cus_taxid = this.cus_taxid;
      this.customer.cus_taxidtype = this.cus_taxidtype;
      this.customer.cus_unknown = this.cus_unknown;
      this.customer.cur_cus_fk = this.cur_cus_fk;
      this.customer.tas_cus_fk = this.tas_cus_fk;
      this.customer.pam_cus_fk = this.pam_cus_fk;
      
      this.dataService.actualizarCustomer(this.index, this.customer).subscribe(
        response => {
          console.log("Se ha modificado el cliente: " + response);
        },
        error => console.log("Error: " + error),
      );
    } else {
      console.log('El cliente es nulo o indefinido.');
    }
  }
}
