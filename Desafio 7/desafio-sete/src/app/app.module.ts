
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { AppRoutingModule } from './app-routing.module';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';
import { CodigoConvitePipe } from './pipes/codigo-convite.pipe';
import { CodigoCpfPipe } from './pipes/codigo-cpf.pipe';
import { CodigoCnpjPipe } from './pipes/codigo-cnpj.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ListaNumerosComponent,
    QuadradoComponent,
    CuboComponent,
    TestesPipeComponent,
    CodigoConvitePipe,
    CodigoCpfPipe,
    CodigoCnpjPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent,  ]
})
export class AppModule { }
