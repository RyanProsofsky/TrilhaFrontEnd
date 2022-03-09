import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ContactService } from './contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  formulario: FormGroup;
  API: any;


  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mensagem: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      texto: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  postar(){
    this.contactService.envio(this.formulario.value).subscribe();
    console.log("funcionando")
  }

  ngOnInit() {

  }

}
