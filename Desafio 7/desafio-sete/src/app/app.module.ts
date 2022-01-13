import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ListaNumerosComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent,  ]
})
export class AppModule { }
