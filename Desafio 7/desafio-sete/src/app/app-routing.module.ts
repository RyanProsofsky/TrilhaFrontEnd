import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';

const routes: Routes = [
{
  path: 'lista',
  component: ListaNumerosComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
