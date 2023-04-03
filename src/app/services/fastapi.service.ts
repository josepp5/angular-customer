import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { AuthService } from './authService.service';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class FastapiService {
  
  url:String = "http://127.0.0.1:8000";

  clientes:Customer[]=[]

  constructor(private http:HttpClient,private authService: AuthService) { 

    this.getCustomers().subscribe(
      (response:any) => {
        this.clientes = Object.values(response['result'])
    });
  }

  ngOnInit(): void {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.token}`
    })
  };

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url+'/customer/', this.httpOptions);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url+`/customer/${id}`, this.httpOptions);
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
    return this.http.delete(this.url+`/customer/${id}`, this.httpOptions);
  }

  loginUser(userName:string,password:string){
    const formData = new FormData();
    formData.append('username', userName);
    formData.append('password', password);
    return this.http.post<Response>(this.url+'/login', formData);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url+'/countries', this.httpOptions);
  }

}

