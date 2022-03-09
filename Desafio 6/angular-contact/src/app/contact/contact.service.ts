import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {


  API = 'http://localhost:3000/contact-us'
  


  constructor(private http: HttpClient) { }

  envio(contact: any): Observable<any>{
    return this.http.post<any>(this.API, contact);
  } 
}

