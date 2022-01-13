import { Component } from '@angular/core';
import { ComponentePaiComponent } from '../componente-pai/componente-pai.component';


@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent extends
ComponentePaiComponent {
  

}
