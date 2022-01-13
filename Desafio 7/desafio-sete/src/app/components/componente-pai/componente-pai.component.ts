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
 


    // if (num % i === 0) {
    // return valor % 2 === 1 ? " é primo" : " não é primo";
  

}
