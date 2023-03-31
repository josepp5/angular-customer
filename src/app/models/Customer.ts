export class Customer {
  cus_id:number=0; 
  acc_cus_fk: number = 1;
  cus_webchange: boolean=false;
  cus_uuid: any;
  cus_account: any;
  cus_syncid: any;
  cus_corporatename: string="Undefined";
  cus_swift: any;
  cus_syncuser: any;
  cus_commercialname: string="Undefined"
  cus_iban: any
  cus_syncpaswd: any
  cus_entity:number=2;
  cus_payday1: any
  cus_syncpaswdcrypt: boolean=false
  cca_cus_fk: number= 2;
  cus_payday2: any
  cus_syncfirstname: string="Undefined"
  sup_cus_fk: any
  cus_payday3: any
  cus_synclastname: string="Undefined"
  cus_alias: string="Undefined"
  cus_logo: string="Undefined"
  cus_einvoice: number=0
  cus_unknown: boolean=false
  cus_notes: any
  cus_deliverydoc: number=0
  cus_country: string="Undefined"
  aco_cus_fk: any
  cus_gdprsend: boolean=false
  cus_taxid: string="ABC";
  cus_disc1: any
  cus_gdprreceived: boolean=false
  cus_taxidtype: string="Undefined"
  cus_disc2: any
  cus_gdprcrm: boolean=false
  cur_cus_fk: number=0
  cus_disc3: any
  cus_reseller: boolean=false
  cus_conversionratemode: number=0
  cus_shippingtype: number=0
  cus_resellerexpiration: any
  plc_cus_fk: any
  cus_employees: any
  cus_gdprpersonincharge: string="Undefined"
  tas_cus_fk: number=0
  cus_anualrevenue: any
  cus_gdprpersoninchargetaxid: string="Undefined"
  cus_locked: boolean=false
  ind_cus_fk: any
  cus_estateorigindest: any
  cus_lockdate: any
  les_cus_fk: any
  cus_provinceorigindest: any
  cus_lockwho: any
  tra_cus_fk: any
  cus_deliverycond: any
  cus_locknote: any
  tco_cus_fk: any
  cus_transnat: any
  cus_creationdate: string="Undefined"
  idi_cus_fk: number=0
  cus_transportmod: any
  cus_maximumrisk: any
  cus_oursupplierid: string="Undefined"
  cus_portairport: any
  cus_maxpendingpayments: any
  cus_typeinvoice: number=0
  cus_goodscode: any
  cus_grouppendingpayments: number=0
  cus_sendedsepa: boolean=false
  cus_statregime: any
  cus_invoiceto: any
  cus_receivedsepa: boolean=false
  cus_countryorigin: any
  cus_accountowner: any
  cus_grouppackingslipsby: number=0
  cus_ediean: string="Undefined"
  cus_salesordercopies: number=0
  cus_hideonsearch: boolean=false
  cus_transportationfeesmode: number=0
  cus_salesinvoicecopies: number=0
  cus_active: boolean=false
  cus_transportationfee: any
  cus_www: any
  cus_accountingsales: any
  cus_recorduser: number=0
  tah_cus_fk: any
  cus_accountcheck: boolean=false
  cus_recordmodification: string="Undefined"
  pam_cus_fk: number=0
  cus_web: boolean=false
  cus_accounting: any



  static fromJson(json: any): Customer {
    const customer = new Customer();
    customer.cus_id = json.cus_id;
    customer.cus_corporatename = json.cus_corporatename;
    customer.cus_commercialname = json.cus_commercialname;
    customer.cus_entity = json.cus_entity;
    customer.cus_country = json.cus_country;
    customer.cus_alias = json.cus_alias;
    customer.cus_taxid = json.cus_taxid;
    customer.cus_taxidtype = json.cus_taxidtype;
    customer.cus_unknown = json.cus_unknown;

    return customer;
  }

/*
  constructor(
    cus_id: number,
    acc_cus_fk: any,
    cus_webchange: boolean,
    cus_uuid: any,
    cus_account: any,
    cus_syncid: any,
    cus_corporatename: string,
    cus_swift: any,
    cus_syncuser: any,
    cus_commercialname: string,
    cus_iban: any,
    cus_syncpaswd: any,
    cus_entity: number,
    cus_payday1: any,
    cus_syncpaswdcrypt: boolean,
    cca_cus_fk: any,
    cus_payday2: any,
    cus_syncfirstname: string,
    sup_cus_fk: any,
    cus_payday3: any,
    cus_synclastname: string,
    cus_alias: string,
    cus_logo: string,
    cus_einvoice: number,
    cus_unknown: boolean,
    cus_notes: any,
    cus_deliverydoc: number,
    cus_country: string,
    aco_cus_fk: any,
    cus_gdprsend: boolean,
    cus_taxid: any,
    cus_disc1: any,
    cus_gdprreceived: boolean,
    cus_taxidtype: string,
    cus_disc2: any,
    cus_gdprcrm: boolean,
    cur_cus_fk: number,
    cus_disc3: any,
    cus_reseller: boolean,
    cus_conversionratemode: number,
    cus_shippingtype: number,
    cus_resellerexpiration: any,
    plc_cus_fk: any,
    cus_employees: any,
    cus_gdprpersonincharge: string,
    tas_cus_fk: number,
    cus_anualrevenue: any,
    cus_gdprpersoninchargetaxid: string,
    cus_locked: boolean,
    ind_cus_fk: any,
    cus_estateorigindest: any,
    cus_lockdate: any,
    les_cus_fk: any,
    cus_provinceorigindest: any,
    cus_lockwho: any,
    tra_cus_fk: any,
    cus_deliverycond: any,
    cus_locknote: any,
    tco_cus_fk: any,
    cus_transnat: any,
    cus_creationdate: string,
    idi_cus_fk: number,
    cus_transportmod: any,
    cus_maximumrisk: any,
    cus_oursupplierid: string,
    cus_portairport: any,
    cus_maxpendingpayments: any,
    cus_typeinvoice: number,
    cus_goodscode: any,
    cus_grouppendingpayments: number,
    cus_sendedsepa: boolean,
    cus_statregime: any,
    cus_invoiceto: any,
    cus_receivedsepa: boolean,
    cus_countryorigin: any,
    cus_accountowner: any,
    cus_grouppackingslipsby: number,
    cus_ediean: string,
    cus_salesordercopies: number,
    cus_hideonsearch: boolean,
    cus_transportationfeesmode: number,
    cus_salesinvoicecopies: number,
    cus_active: boolean,
    cus_transportationfee: any,
    cus_www: any,
    cus_accountingsales: any,
    cus_recorduser: number,
    tah_cus_fk: any,
    cus_accountcheck: boolean,
    cus_recordmodification: string,
    pam_cus_fk: number,
    cus_web: boolean,
    cus_accounting: any
    ){
          this.cus_id = cus_id;
          this.cus_corporatename= cus_corporatename;
          this.cus_commercialname= cus_commercialname;
          this.cus_entity= cus_entity;   
          this.cus_alias= cus_alias;
          this.cus_unknown= cus_unknown;
          this.cus_country= cus_country;
          this.cus_taxid= cus_taxid;
          this.cus_taxidtype= cus_taxidtype;
          this.cur_cus_fk= cur_cus_fk;
          this.tas_cus_fk= tas_cus_fk;
          this.pam_cus_fk= pam_cus_fk;
    }

      static fromJson(json: any[]): Customer[] {
        return json.map(json => {
            const customer = new Customer();
            customer.cus_id = json.cus_id;
            customer.cus_corporatename = json.cus_corporatename;
            customer.cus_commercialname = json.cus_commercialname;
            customer.cus_entity = json.cus_entity;
            customer.cus_country = json.cus_country;
            customer.cus_alias = json.cus_alias;
            customer.cus_taxid = json.cus_taxid;
            customer.cus_taxidtype = json.cus_taxidtype;
            customer.cus_unknown = json.cus_unknown;
    
            return customer;
        });
      }
      */
}

