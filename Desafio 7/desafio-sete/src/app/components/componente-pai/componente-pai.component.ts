import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-componente-pai',
  template: ""
})


export class ComponentePaiComponent {
  @Input() numeroComponent: number = 0;
  isPar(valor: number): string {
    return valor % 2 === 0 ? "par" : "impar";

  }

  isPrimo(valor: number): string {
    let cont = valor - 1 // cont recebe valor - 1
    let primo = true
    for (let i = cont; i > 1; i--) {
      if (valor % i == 0) {
        primo = false
        break
      }
    }
    return primo ? "é primo" : "não é primo"

  }

  teste() {
    console.log('esta funcionando')
  }

  aoCubo(x: number = 0) { 
     for (let x = 0; x <= 5; x++) {
     } 
     
      
     


  

  }
}
  // aoCubo(_valor: number): string {
  //   let n1
  //   let n2
  //   let n3

  //   function (numeroAoCubo)(n1: number ,n2: number ,n3: number){
  //     if ( n1 * n2 * n3 ) {
  //         return n1* n2 * n3
  //     }
  // }

