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


  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mensagem: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      texto: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    console.log(this.formulario.value)
  }

  ngOnInit() {
  
  }

  postar() {
    console.log("está funcionando")

  }
}




