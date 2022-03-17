import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formulario: FormGroup;
  API: any;

  constructor(private fromBuilder: FormBuilder, private contactService: ContactService) {
    this.formulario = this.fromBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mensagem: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      texto: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })
   }

   postar(){
     this.contactService.envio(this.formulario.value).subscribe();
     console.log("funcionando")
   }
  ngOnInit(): void {
  }

}
