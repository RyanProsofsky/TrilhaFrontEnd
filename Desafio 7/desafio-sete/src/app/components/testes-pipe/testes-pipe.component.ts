import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.css']
})
export class TestesPipeComponent implements OnInit {
 
  evento: any = {
    DataDoevento: new Date(2021,9,21),
    preco: 35.00,
    ingressos: 0.8465,
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
