 ## a) A respeito de componente, responda: 

I. O que é um componente em aplicações Angular?<br>
R: Os componentes, são blocos de construção para as aplicações em angular.

II. Do que um componente é composto?<br>
R: O componente é composto por:

- Um modelo HTML que declara o que é renderizado na página
- Uma classe Typescript que define o comportamento 
- Um seletor CSS que define como o componente é usado em um modelo
- Opcionalmente, estilos CSS aplicados ao modelo 

III. Qual é o comando utilizado para criar um componente utilizando Angular CLI?<br>
R: ng g c OU ng generate component 

I V. Qual a importância da reutilização de componentes?<br>
R: Com a reutilização de componentes é possivel otimizar o trabalho, cortar custos desnecessarios, facilitar a colaboração e acelerar a velocidade dos projetos.

V. Qual a funcionalidade do selector no exemplo abaixo?<br>

                            Exemplo:@Component({  
                                    selector:'app-component-overview',
                                    })             

 R: O selector vai ser o nome que será usado no template na hora que for chamar o component no html ou css.



VI. Explique a funcionalidade de templateUrl e template nos exemplos abaixo equando devemos utilizar cada uma delas.<br>
R: templateUrl é o nome do documento HTML que será a parte visual do componente, utilizando ele, você esta fazendo uma linkagem entre os arquivos.



                            Exemplo:@Component({  
                                    selector:'app-component',
                                    templateUrl:'./component.component.html'
                                    })    
R: Colocando o nome do selector 'app-component' no html, ele aparece com o nome que ta escrito no template 'Hello World!'




                            Exemplo 2:@Component({
                                      selector: 'app-component-overview',
                                      template: '<h1>Hello World!</h1>' 
                                      }) 

VII. Explique a funcionalidade de styleUrls e styles nos exemplos abaixo equando devemos utilizar cada um deles.   
R: O styleUrls serve para fazer uma linkagem dos arquivos, assim como o templateUrl.
     

                            Exemplo 1:@Component({  
                                      selector: 'app-component', 
                                      templateUrl: './component.component.html',                          
                                      styleUrls: ['./component.component.css']                         
                                      })


R: O styles serve para você estilizar especificamente algo do template.

                            Exemplo 2:@Component({ 
                                      selector: 'app-component-overview',   
                                      template: '<h1>Hello World!</h1>',                       
                                      styles: ['h1 { font-weight: normal; }']   
                                      })



                               