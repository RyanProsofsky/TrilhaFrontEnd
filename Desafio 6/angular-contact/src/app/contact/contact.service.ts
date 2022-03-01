import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {


  API = 'http://localhost:3000/contact-us'

  constructor(private http: HttpClient) { }

  envio(contact: any){
    return this.http.post(this.API, contact);
  } 
}

