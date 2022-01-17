 ## ITEM 1 


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

                            Exemplo 1:@Component({  
                                      selector: 'app-component', 
                                      templateUrl: './component.component.html',                          
                                      styleUrls: ['./component.component.css']                         
                                      })

## ITEM 2: ROTAS
Sobre o funcionamento das rotas do Angular, responda:

I. Qual é o comando no Angular CLI para criar uma nova aplicação com rotas?  
R: ng new NomeExemplo

II. Qual é o comando no Angular CLI para criar um novo módulo com rotas? <br>
R: ng g m NomeExemplo --routing

III. Para que serve o método navigate( ) da classe Router?<br>
R: Ele é utilizado para fazer a navegação via código.

IV. Para que serve o método is-active( ) da classe Router?<br>
R: Pra determinar uma rota ativa.

V. Para que serve o arquivo src/app/app-routing.module.ts?<br>
R: Ele adiciona uma navegação com roteamento.

VI. Para que serve a tag <'router-outlet></'router-outlet>?<br>
R: Ele nos permite adicioná-la dentro do arquivo HTML do nosso AppComponent, dessa forma nós podemos passar as noassas rotas para que ele possa interpreta-las e direcionar para o component correto.

VII. Dê um exemplo de um botão chamando uma rota através de um método em angular.<br>
R:

VIII. Dê um exemplo de um botão chamando uma rota sem chamar um método em angular.<br>
R:

IX. O que é Lazy Load? Dê um exemplo da definição de uma rota em angular utilizando Lazy Load.<br>
R:

X. O que é Eager Load? Dê um exemplo da definição de uma rota em angular utilizando Eager Load.<br>
R:


## ITEM 3: PIPES

I. Qual é a utilidade dos pipes em aplicações Angular?<br>
R: Pipes funcionam como uma máscara na aplicação.

II. Cite os 6 pipes que fazem parte do pacote inicial do Angular.<br>
R:UpperCasePipe, LowerCasePipe, CurrencyPipe, Decimalpipe, PercentPipe.

III. Descreva a funcionalidade de cada um dos pipes citados acima e dê um exemplo da sua utilização, juntamente com o resultado em tela.
R:
- DatePipe: formata um valor de data de acordo com as regras de localidade.<br>

- UpperCasePipe: transforma o texto em letras maiúsculas.<br>

- LowerCasePipe: transforma o texto em todas as letras minúsculas.<br>

- CurrencyPipe: transforma um número em uma string de moeda, formatada de acordo com as regras de localidade.<br>

- DecimalPipe: transforma um número em uma string com um ponto decimal, formatado de acordo com as regras de localidade.<br>

- PercentPipe: transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade.<br>

IV. O que são custom pipes?<br>
R: 







                               