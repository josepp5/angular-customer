import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class FastapiService {
  
  url:String = "http://127.0.0.1:8000";

  clientes:Customer[]=[]

  constructor(private http:HttpClient) { 

    this.getCustomers().subscribe(
      (response:any) => {
        this.clientes = Object.values(response['result'])
    });
  }

  ngOnInit(): void {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url+'/customer/');
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url+`/customer/${id}`);
  }

  registrarCustomer(customer: Customer) {
    let body = "{\"parameter\" : "+ JSON.stringify(customer)  +"}";
    return this.http.post<Customer>(this.url+'/customer/create', body,this.httpOptions);
  }

  actualizarCustomer(id: number, datos: Customer) {
    let body = "{\"parameter\": "+ JSON.stringify(datos) +"}";
    return this.http.put(this.url+`/customer/${id}`, body,this.httpOptions);
  }

  eliminarCustomer(id: number) {
    return this.http.delete(this.url+`/customer/${id}`);
  }
}
