## Item 1: Services

I. Qual o propósito de services no angular?<br>
R: O propósito de services no angular é organizar e compartilhar lógica de negócios, modelos ou dados e funções com diferentes componentes.

II. Porque no Angular há uma distinção entre components e services?<br>
R: Os componentes definem visualizações, que são conjuntos de elementos de tela que o Angular pode escolher e modificar de acordo com a lógica e os dados do seu programa. Os componentes usam serviços , que fornecem funcionalidades específicas não relacionadas diretamente às visualizações.

III. Como as services são disponibilizadas em um component?<br>
R: Temos que importar ele no imports, podemos criar uma variável chamando esse arquivo do service para conseguir utiliza-lo.

VI. Que tipo de tarefas uma service pode ter?<br>
R: Copiam arquivos e diretórios; baixam arquivos e dados; executam métodos da Web; aplicam operações a documentos XML; e criam perfis de dados para limpeza

V. Verdadeiro ou Falso. Uma service precisa obrigatoriamente estar em pelo menos um módulo? Justifique sua escolha<br>
R: verdadeiro, ele precisa ao menos estar em um arquivo, para dessa forma conseguir criar a função desse service.


VI. Verdadeiro ou Falso. Uma service é do tipo de padrão de projeto Singleton? Justifique sua escolha<br>
R: verdadeiro, por que ele é instanciado apenas uma vez e pode ser utilizado por vários components e services. 


VII. Escreva uma service que deverá ter os seguintes métodos e em cada um deverá
escrever uma implementação básica (pode ser usado Arrays):

- getUsers( ): <any> { }
- getUserById(userId: number): <any> { }
- setUsers(users: any): <any> { }
- deleteUser(userId: number): <any> { }

<img src="../Desafio 5.3/imagem/c584ea0c-0daa-4d5b-ad19-9c0becab266e.jpg">

b) A respeito de services, responda: 

I. O que é Injeção de Dependências?<br>
R: é um padrão de design no qual uma classe solicita dependências de fontes externas, em vez de ter que criá-los

II. Verdadeiro ou Falso. Injeção de Dependências pode ser apenas de services?
Justifique sua escolha.<br>
R: verdadeiro, por que o service é uma maneira de deixar a aplicação mais organizada. 

III. Verdadeiro ou Falso. O Angular quando vai instanciar uma classe de componente
verifica se as injeções de dependência já não estão sendo usadas?
Justifique sua escolha.<br>
R: verdadeiro,  

c) HTTP Client:

I. O que é o protocolo HTTP?<br>
R: É um protocolo de transferência que possibilita que as pessoas que inserem a URL seu site na Web possam ver os conteúdos e dados que nele existem. 

II. Cite outros tipos de comunicação com o backend e faça um breve resumo de cada.<br>
R:   

- FTP: Protocolo de transferência de arquivos. 
- SMTP: Protocolo de Transferência de Correio Simples.  
- TFTP: Protocolo de transferência de arquivos triviais.  
- SFTP: FTP simples. 
- NNTP: Protocolo de Transferência de Notícias da Rede. 


III. Que recursos o HTTP nos fornece?<br>
R:  
 - HTTP é independente de mídia: especifica que qualquer tipo de contúdo de mídia pode ser enviado pot HTTP, desde que o servidor e o cliente possam manipular o conteúdo de dados.

 - HTTP é sem conexão: É uma abordagem sem conexão em que o cliente HTTP, ou seja, um navegador inicia a solicitação HTTP e após a solicitção ser enviada o cliente se desconecta do servidor e aguarda a resposta 

 - HTTP é sem estado: o cliente e o servidor estão cientes um do outro apenas durante uma solicitação atual. Depois, ambos se esquecem. Devido á natureza sem estado do protocolo, nem o cliente nem o servidor podem reter as informações sobre diferentes solicitções nas páginas da web. 

 
VI. Para usar o HttpClient no Angular, como devemos fazer sua importação e injeção?<br>
R: Precisamos importar o módulo HttpClientModule no módulo em que se encontra declarado o componente/serviço em que vamos realizar as requisições.

V. Verdadeiro ou Falso. O HttpClient pode ser usado com RxJS? Justifique sua escolha.<br>
R:  Verdadeiro, o httpClient ele serve pra enviar solicitações e recuperar as respostas e o RxJS é uma biblioteca de construção de eventos.

VI. Cite os principais métodos HTTP e faça um breve resumo de cada.<br>
R: 
- GET: O método GET requisita uma representação do recurso especificado. Requisições usando Get devem apenas recuperar dados e não devem ter qualquer outro efeito.

- HEAD: Variação do GET em que o recurso não é retornado. É usado para obter meta-informações por meio do cabeçalho da resposta, sem ter que recuperar todo o contéudo. 

- PUT: O método PUT envia os dados de forma semelhante ao POST, através do corpo do HTTP a diferença entre os 2 métodos é semâmtica. Caso seja necessário atualizar os dados de um usuário, utilizando o método PUT você pode os atualizar diversas vezes, pois o PUT vai sobrescrever os dados com isso ficará somente com um único registro atualizado.

- DELETE: Exclui o recurso.

- TRACE: Ecoa o pedido, de maneira que o cliente possa saber o que os servidores intermediários estão mudando em seu pedido. 

- OPTIONS: Recupera os métodos HTTP que o servidor aceita.
 
- CONNECT: Serve para uso com um proxy que possa se tornar um túnel SSL e TLS(um túnel pode ser usado, por exemplo, para criar uma conexão segura) 


VII. Verdadeiro ou Falso. Com o protocolo HTTP é possível dizer/setar o tipo de
resposta do servidor backend? Justifique sua escolha.<br>
R: verdadeiro, podemos enviar uma mensagem falando se deu certo ou errado.

VIII. Cite os tipos de retorno que uma requisição HTTP pode ter? Faça um breve resumo
de cada.<br>
R:
- GET: indica que um recurso será recuperado do servidor. Por exemplo, quando você solicita uma página pelo seu browser.
- POST: indica que um recurso será inserido ou criado no servidor. Um upload de um novo arquivo.
- PUT: indica que um recurso será atualizado no servidor. Seria equivalente a um update em uma base de dados.
- DELETE: indica que um recurso será removido. Seria o equivalente a um delete em uma base de dados.



IX. Cite os principais status de uma requisição HTTP e faça um breve resumo de cada.<br>
R:
- GET: O recurso foi buscado e transmitido no corpo da mensagem.
- HEAD: Os cabeçalhos da entidade estão no corpo da mensagem.
- PUT OU POST: O recurso descrevendo o resultado da ação é transmitido no corpo da mensagem.
- TRACE: O corpo da mensagem contém a mensagem de requisição recebida pelo servidor.

X. Faça um exemplo de chamadas do tipo GET, POST, PUT, DELETE.<br>
R:
- GET
<img src="../Desafio 5.3/imagem/metodoGet.img">

- POST
<img src="../Desafio 5.3/imagem/metodoPost.img">

- PUT
<img src="../Desafio 5.3/imagem/metodoPut.img">

- DELETE
<img src="../Desafio 5.3/imagem/metodoDelete.img">




XI. Para que serve o cabeçalho em uma requisição HTTP?<br>
R: Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP.

XII. O que é um Interceptor e quais as suas aplicações?<br>
R: Um interceptor é um pattern simples que nos permite interceptar, tratar e gerenciar requisições HTTP, antes mesmo delas serem enviadas ao servidor 

XIII. Quais cenários mais comuns podemos usar Interceptors?<br>
R:  
- Manipulação de erros
- Caching Markup
- Validação de dados 
- Substituindo a marcação
- Modificação de cabeçalhos HTTP


d) RxJS:

I. O que é o RxJS?<br>
R: o RxJS é uma biblioteca para construção de programas assíncronos ou baseado em eventos, utlizando uma sequencia de observables 

II. Qual a diferença de Promises e Observables?<br>
R:

## Observables:

- Emite vários valores durante um período de tempo. 
- Eles não são executados até que subscrevamos usando o método subscribe(). 
- Ter assinaturas que podem ser canceladas usando o método unsubscribe(), que impede o ouvinte de receber valores adicionais.
- Forneça o mapa para os operadores forEach, filter, reduce, retry e retryWhen.
- Entrega erros aos assinantes.

##  Promises:
- Emite um único valor de cada vez. 
- executa imediatamente após a criação.
- Não são canceláveis.
- Não fornece nenhuma operação. 
- Empurre erros para as promessas filho.

III. O que significa ser baseado em eventos?<br>
R: Básicamente é uma ação gerada pelo usuário, como por exemplo: clicar em um menu hamburguer 

VI. O que é o padrão de projetos Observer?<br>
R: Os observes são classes com um método de notificação e subject é uma classe responsável por adicionar ou remover um Observer em sua coleção interna de Observers e notificá-los sobre uma alteração de estado.

V. O que é o padrão de projetos Iterator?<br>
R:  É um padrão de projeto comportamental que permite a passagem sequencial através de uma estrutura de dados complexa sem expor seus detalhes internos.
 
VI. O que é programação funcional com coleções?<br>
R: A programação funcional (FP) define as operações padrão em coleções . É um paradigma declarativo que trata a computação como a avaliação de funções matemáticas.


VII. Quais os conceitos básicos do RxJS para eventos assíncronos? Descreva todos e
dê um exemplo de como utilizá-lo.<br>
R: 
- Observable: Representa a ideia de uma coleção invocável de valores ou eventos futuros.
<img src="../Desafio 5.3/imagem/subject.img">

- Observer: É uma coleção de callbacks que sabe escutar os valores entregues pelo Observable
<img src="../Desafio 5.3/imagem/observer.img">

- Subscription: Representa a execução de um Observável, é útil principalmente para cancelar a execução.
<img src="../Desafio 5.3/imagem/subscription.img">

- Subject: É o equivalente a um EventEmitter e a única maneira de multicast de um valor ou evento para vários observadores.
<img src="../Desafio 5.3/imagem/subject.img">

- Schedulers: São despachantes centralizados para controlar a simultanidade, permitindo-nos coordenar quando a computação acontece em, por exemplo, setTimeout ou requestAnimationFrame.


VIII. Quais são os operadores de criação?<br>
R: 
- ajax
- bindCallBack
- bindNodeCallBack
- defer
- empty
- from
- fromEvent
- fromEventPattern
- generate
- interval
- of
- range
- throwError
- timer
- iif.


IX. Ainda dentro de operadores de criação, explique melhor e dê um exemplo para os
seguintes operadores:<br>

- ajax: Ele é usado para solicitar dados do servidor sem atualização de página inteira e usar o resultado, que originalmente era XML, para renderizar novamente uma parte da página.
<img src="../Desafio 5.3/imagem/ajax.img">

- from: from é usado para transformar dados que podem ser iterados em um observável .
<img src="../Desafio 5.3/imagem/from.img">

- fromEvent: É um método fornecido por RxJs para criar Observable.
<img src="../Desafio 5.3/imagem/fromEvent.img">


- generate: uma sequência observável executando um loop controlado por estado produzindo os elementos da sequência
<img src="../Desafio 5.3/imagem/generate.img">


- of: O operador criará um Observable que emite uma quantidade variável de valores em sequência, seguido por uma notificação de conclusão.
<img src="../Desafio 5.3/imagem/of.img">

- interval: Usado para criar um observável que emite uma sequência de inteiros toda vez para um determinado intervalo de tempo
<img src="../Desafio 5.3/imagem/interval.img">

- throwError: Cria um observable que emite uma notificação de erro
<img src="../Desafio 5.3/imagem/throwError.img">

- timer: Usado para criar um observável que começa a emitir os valores após o timeout , e o valor continuará aumentando após cada chamada.
<img src="../Desafio 5.3/imagem/timer.img">

X. Quais os operadores de criação de associação?<br>
R: combineLatest, concat, forkJoin, merge, partition, race, zip.
 
XI. Ainda dentro de operadores de criação de associação, explique melhor e dê um
exemplo para os seguintes operadores:<br>

- concat: Esse operador deve ser utilizado quando a ordem for importante, por exemplo, quando você precisa enviar requisições HTTP que o resultado deve ser exibido em ordem.
<img src="../Desafio 5.3/imagem/concat.img">

- forkJoin: Recebe qualquer número de observáveis de entrada que podem ser passados como um array ou um dicionário de observáveis de entrada . ... forkJoin aguardará a emissão e conclusão de todos os observáveis passados e, em seguida, emitirá um array ou um objeto com os últimos valores dos observáveis correspondentes.
<img src="../Desafio 5.3/imagem/forkJoin.img">

- merge: usado para transformar vários observáveis em um único observável . Ele cria um Observável de saída, que emite simultaneamente todos os valores de cada Observável de entrada.
<img src="../Desafio 5.3/imagem/merge.img">

XII. Quais os operadores de transformação?<br>
R: 
- buffer
- bufferCount
- bufferTime
- bufferToggle
- bufferWhen
- concatMap
- concatMapTo
- exhaust
- exhaustMap
- expand
- groupBy
- map
- mapTo
- mergeMap
- mergeMapTo
- mergeScan
- pairwise
- partition
- pluck
- scan
- switchScan
- sitchMap
- switchMapTo
- window
- windowCount
- windowTime
- windowToggle
- windowWhen

XIII. Ainda dentro de operadores de transformação, explique melhor e dê um exemplo
para os seguintes operadores:<br>

- concatMap: Projeta cada valor emitido pela fonte para um Observable interno que se liga ao Observable resultante sequencialmente, esperando que cada Observable interno seja concluído antes de vincular o próximo
<img src="../Desafio 5.3/imagem/concatMap.img">

- map: Permite que nós manipulamos os valores do retorno do Observable.
<img src="../Desafio 5.3/imagem/map.img">

- mapTo: recebe uma fonte observável como entrada . Ele aplica uma função de projeto a cada um dos valores emitidos pela fonte observável e o transforma em um novo valor.
<img src="../Desafio 5.3/imagem/mapTo.img">

- mergeMap: Mapeia cada valor do observável de origem em um observável interno, se inscreve nele e, em seguida, começa a emitir os valores dele substituindo o valor original. Ele cria um novo observável interno para cada valor que recebe da Fonte.
<img src="../Desafio 5.3/imagem/mergeMap.jpeg">

- mergeMapTo:É como mergeMap, mas mapeia cada valor sempre para o mesmo Observable interno.
<img src="../Desafio 5.3/imagem/mergeMap.jpeg">

- switchMap: Ele basicamente projeta cada valor de origem para um observável que é então mesclado no observável de saída, emitindo valores apenas do observável projetado mais recentemente.
<img src="../Desafio 5.3/imagem/switchMap.img">

- switchMapTo: Mapeia cada valor de origem para o Observable internalObservable fornecido, independentemente do valor de origem e, em seguida, nivela os Observables resultantes em um único Observable, que é o Observable de saída
<img src="../Desafio 5.3/imagem/switchMapTo.jpeg">