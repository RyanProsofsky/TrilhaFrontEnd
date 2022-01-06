## a) Explique de forma sucinta a diferença entre SPA e MPA.
R: O SPA apresenta o conteúdo em uma unica página, Já o MPA, as informações são carregadas de algum lugar.

## b) Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?
R: As páginas web nos anos 90, continham pouca estilização de forma geral, e os conteudos eram muito bagunçados, Já nos anos 2000, eram um pouco mais estilizados e com os conteúdos mais agrupados e organizados, mas ainda com 0 estilização em links.

## c) O que é WEB 1.0 , WEB 2.0 e WEB 3.0? 
- WEB 1.0 : Sites de conteúdo estático com pouca interatividade dos internautas e diversos diretórios de links.
- WEB 2.0 : Sites com interação entre os usuarios, redes sociais, blogs entre outros.
- WEB 3.0 : Internet com informação organizada, para seres humanos e também maquinas entenderem, e conseguirem se identificar e achar os conteúdos.

## d) Com suas palavras, responda às seguintes perguntas referentes ao Angular:

I. De forma resumida o que é o Angular? <br>
R: Angular é framework do JavaScript de código fonte aberto.

II. Qual a relação do Angular com SPA?<br>
R: Ele da ferramentas necessárias para criação de a plicações SPA, ele deixa o desenvolvimento da aplicação mais simples e otimizado.

III. Em uma aplicação básica, o que é essencial ter?<br>
R: É essencial utilizar o TypeScript, que ao ser compilado, devolve um arquivo em JavaScript, o TypeScript oferece funcionalidades adicionais que são essenciais para o desenvolvimento em Angular.

IV. O que é o Angular CLI e qual a sua importância? Dê exemplos;<br>
R: É uma ferramenta que ajuda a processar e agrupar os arquivos TypeScript, JavaScript, CSS, HTML e imagens.

V.Para que serve o arquivo angular.json?<br>
R: Esse arquivo é responsavel por gerenciar as depêndencias do nosso projeto.

VI. Quais pacotes (libs) são considerados primários (default)?<br>
R: HttpClient, Router, Angular Forms.

VII. Para que serve o arquivo package.json?<br>
R: Contém todas as dependências da aplicação, à medida que instalar uma nova dependência, ela vai aparecer no arquivo.

VIII. Para que serve o arquivo environment.ts?<br>
R: O enviroment.ts é um arquivo de configuração de ambiente.


## e) Sobre Text Interpolation, responda:

I. O que é?<br>
R: Ele permite você alterar dinamicamente algum elemento da sua página.

II. Quais os benefícios de se ter interpolação em uma aplicação Angular?<br>
- Avalia todas as expressões entre chaves duplas.
- Converte os resultados da expressão em strings. 
- Vincula os resultados a strigns literais adjacentes.
- Atribui o composto a um elemento ou propriedade de diretiva. 

III. Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.<br>
R:<img src="../Desafio 5.1/imagem/interpolação.jpg" >


## f) A respeito de Bindings, responda:

I. O que é Property Binding e quais as suas aplicações?<br>
R: O Property Binding ajuda a definir valores para propriedades de elementos ou diretivas. 

II. Qual é o passo a passo do fluxo das informações com Property Binding?<br>
R: O property blinding move o valor em uma direção que é da propriedade de um componente para uma propriedade do elemento de destino. 

III. Dê um exemplo de Property Binding e explique o seu funcionamento.<br>
R: <img src="../Desafio 5.1/imagem/a0b152e1-ab3c-499c-9375-c77c13fb9493.jpg">

IV. O que é Event Binding?<br>
R: É a associação de eventos.

V. Dê um exemplo de Event Binding e explique o seu funcionamento.<br>
R: Quando o usuário clicar no botão, ele vai receber um alert com a mensagem: botão clicado!  <img src="../Desafio 5.1/imagem/aaaa.jpg">

VI. O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?<br>
R: O Two-Data-Binding fornece aos componentes uma maneira de compartilhar dados, ao usar o two-way-data-binding, tanto o template e o component são atualizados ao mesmo tempo. Devemos usar o Two-Way-Data-Binding quando utilizarmos os formularios.

VII. Dê um exemplo de Two-Way-Data-Binding e explique.<br>
R:Nesse exemplo que eu dei, o usuário digita o valor na caixa de entrada, e ao mesmo tempo atualiza a informação no paragráfo.  <img src="../Desafio 5.1/imagem/certo.jpg">

## g) Diretivas:

I. O que é uma diretiva Angular e qual o seu propósito?<br>
R: são marcadores de um elemento DOM, pode ser feitos comportamentos especificos para qualquer elemento da pagina.

II. Quais tipos de diretivas existem?<br>
R: Diretivas de atributos, Diretivas estruturais e Diretivas de componentes.

III. O  Angular  possui  algumas  diretivas  default,  explique  as  6  principais  e  dê  um  exemplo de cada;<br>
R: - NgClass:Ao clicar no icone de estrela ele vira o outro icone de favorito .<img src="../Desafio 5.1/imagem/kkkk.jpg">
- NgStyle: Quando clicado, o botão passa a assumir o estilo contido dentro da diretiva ngStyle<img src="../Desafio 5.1/imagem/ngstyle.jpg">
- NgModel: Quando o usuário escreve algo no input, ele passa as informações ao vivo para o paragráfo. <img src="../Desafio 5.1/imagem/aaaa.jpg">
- NgIf: Ele verifica se no array tem algo escrito, se tiver algo escrito, ele exibe que há tarefas, se não tiver nada, ele exibe que não há tarefas. <img src="../Desafio 5.1/imagem/ngif.jpg"> 
- NgFor: Ele lista os itens do array por ordem númerica.<img src="../Desafio 5.1/imagem/ddd.jpg">
- NgSwitch: quando selecionado no cabeçalho do site, o home fica destacado e aparece a informação adicionada no home<img src="../Desafio 5.1/imagem/df586735-3112-4d2b-a1ac-208426ee343e.jpg">

## h) Reactive forms:
I. Qual a diferença entre template-driven e reactive forms?<br>
- REACTIVE FORMS : Estruturado e imutavel, Sincrono, Validação feita através de funções.    
- TEMPLATE-DRIVEN: Não estruturado e mutável, Assincrono, validação feita através de diretivas   

II. Quais benefícios temos ao usar um formulário reativo?<br>
R: Com o Reactive forms você realiza a validação no seu componente, ou seja, se mudarem o template a regra continua no componente.

III. Quais módulos são necessários para criar os formulários reativos?<br>
R: ReactiveFormsModule e FormControl.

IV. Quais classes base temos para formulários reativos no Angular?<br>
R: FormControl, FormGroup, FormArray, ControlValueAcessor.  

V. Como é feita a configuração de um formulário reativo usando separadamente as classes base?<br>
R: Primeiro você tem que definir o modelo do formulario diretamente na classe de componente.

VI. Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?<br>
R:  O usuário digita o valor no elemento de entrada, o elemento de entrada emite um evento com o valor mais recente, 

VII. Como é feita a captura dos dados de um formulário reativo e apresentado na tela?<br>
- Os elementos do formulário estão vinculados diretamente ao modelo de formulário. 
- Quando atualizados, não dependem de um refresh na pagina para serem mostrados na IU.

VIII. Explique para o que serve a validação de um formulário e como isto pode ser apresentado para o usuário?<br>
R: A validação do formulário é usada para garantir que a entrada do usuário seja completa e correta. Normalmente a validação é usada para tornar um campo obrigatorio.

