# Informações do Projeto
`TÍTULO DO PROJETO`  

Van Universitária

`CURSO` 

Engenharia de Software

## Participantes

Os membros do grupo são: 

* Lucas Mattos Rodrigues - lucas.mattos@sga.pucminas.br
* Caio Henrique Miranda dos Reis - caio.reis.1267215@sga.pucminas.br

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Conforme a realização de pesquisas, através de relatos e por via de portais de notícias, foi observado que muitos universitários e pais sofrem com o problema de encontrar vans universitárias disponíveis para os seus turnos e bairros, para os levarem de sua residência ao local de ensino e vice e versa.

Segundo o portal de notícias, O TEMPO, os motoristas de vans universitárias foram um dos públicos mais afetados pela atual pandemia do COVID-19, pois por conta da paralisação total das escolas/universidades, os motoristas acabaram perdendo muitos dos seus clientes e ficando estagnados na atual crise.

Ainda hoje esse problema não foi totalmente solucionado, pois por conta da lenta volta do modelo de ensino totalmente presencial das escolas e universidades, os motoristas de van ainda não conseguiram se firmar totalmente novamente, por conta do preço da gasolina e da pouca demanda que estão recebendo.

## Objetivos

Nosso objetivo é trazer uma aplicação que forneça mais visibilidade para os motoristas de vans universitárias através de um catálogo onde será mostrado o seu serviço, com isso, buscamos trazer mais opções de vans para os universitários, levando em conta, a dificuldade encontrada pelos mesmos ao tentarem achar vans para a suas residências.

Buscamos levar mais valor ao motorista além da visibilidade que irá atingir, um dos nossos objetivos é melhorar a gestão dos seus passageiros da van, entregando assim, uma listagem de passageiros matriculados na van e uma lista de presença, para que o motorista da van possa ter essas informações de fácil acesso.

Para a segurança de todos, será exigido que todos os motoristas estejam devidamente regularizados com suas licenças e documentos do veículo, para que, os universitários tenham total segurança no serviço que estarão contratando.

## Justificativa

Por conta da atual pandemia que o mundo está passando, o serviço de transportes particulares foi bastante afetado, com base nisso, o projeto de Vans Universitária busca reerguer esse serviço que é de extrema importância para os alunos que possuem dificuldades com o meio de transporte público e buscam maior conforto/facilidade nessa retomada de semestre presencial.

Além disso, essa aplicação é muito importante para os motoristas de van universitárias que foram obrigados a parar de trabalhar com esse serviço com o decorrer da pandemia, e com o retorno às aulas ainda enfrentam dificuldades em voltar por conta da baixa demanda que recebem.

Segundo o portal de notícias G1, mesmo com lei mais rígida, vans e carros ainda fazem transporte clandestino em Belo Horizonte, e com os pontos de ônibus lotados, muitas pessoas escolhem os meios de transporte clandestinos que por muitas vezes não seguem os protocolos de segurança contra o COVID-19, não possuem a manutenção correta do veículo, a habilitação e licenças do motoristas são irregulares, além das condições precárias do veículos que não oferecem o mínimo de segurança ao passageiro.

## Público-Alvo

Nós possuímos dois públicos-alvos e são eles:

Universitários: Jovens em média de 17 à 25 anos que estão graduando em alguma universidade que necessitam de outro meio de transporte além do transporte público ou carro de aplicativo para a sua locomoção diária da faculdade para a casa e vice e versa, por conta, de dificuldades orçamentais e de trajetória que esses outros meios oferecem.

Motoristas de Van: Motoristas de van universitária que estejam com dificuldades em encontrar alunos da universidade para preencher as vagas do seu veículos.
 
# Especificações do Projeto

# Técnicas e ferramentas utilizadas

Optamos por conversar com pessoas pessoalmente para entender melhor como esse problema as afeta. Os entrevistados foram estudantes, motoristas de vans e pais preocupados com a segurança de seus filhos. Também realizamos pesquisas por meio de redes sociais, para entender como o produto era divulgado e como as pessoas tentavam procurar o mesmo.

## Personas e Mapas de Empatia

Foram definidas quatro personas, com base em nossas pesquisas de campos e por meio de notícias, são elas:

![Sprint 1 - Processo de Design Thinking - Frame 5](https://user-images.githubusercontent.com/99363911/164113508-4af218f1-90ef-4620-965e-9b26cf7da9d2.jpg)
![Sprint 1 - Processo de Design Thinking - Frame 4](https://user-images.githubusercontent.com/99363911/164113513-9233252d-dba1-4d68-b0f9-2c06c47c9769.jpg)

# Histórias de Usuários

Como ESTUDANTE preciso de uma plataforma que auxilie no contato com motoristas que tenham rotas próximas a minha casa para poder escolher o melhor preço.

Como ESTUDANTE preciso de uma plataforma que possa mediar o contato entre eu e o motorista de van para chegar em casa com mais segurança.

Como ESTUDANTE quero uma plataforma que me dê segurança na qualidade das vans para meu maior conforto.


Como MOTORISTA quero uma plataforma que me dê segurança ao colocar pessoas novas dentro da minha van, para assim não colocar ninguém em risco.

Como MOTORISTA preciso de uma plataforma que me aproxime de futuros clientes, para poder oferecer o melhor preço para todos 

Como MOTORISTA quero uma plataforma que me auxilie na rota das entregas, para eu poder prospectar clientes que morem mais perto de onde eu passo.

# Requisitos

#### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
RF-001 | Permitir que o usuário se cadastre como estudante (usuário padrão) ou motorista.| Alta
RF-002| Permitir que motoristas cadastrem as rotas que eles passam. | Baixa
RF-003 | Permitir que estudantes procurem motoristas que passam perto ou passem por suas casas. | Media
RF-004 | Permitir que usuário possa ver a qual o ponto mais próximo que o motorista passa da sua casa. | Baixa
RF-005 | Permitir que estudante passe entre em contato com motorista. | Alta
RF-006 | Permitir que motorista e estudante vejam o histórico de pessoas que eles entraram em contato. | Baixa
RF-007 | Permitir que motoristas coloque a quantidade de pessoas na van.| Medio
RF-008 | Avaliação de motoristas para estudantes.| Baixo
RF-009 | Avaliação de estudantes para motoristas.| Baixo
RF-0010 | Mostrar horário que motorista passa na faculdade (com margem de atraso)s.| Medio

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
RNF-001 | Login deve ter autenticação de dois fatores.| Baixa
RNF-002| Sistema deve ser totalmente responsivo. | Alta
RNF-003 | O cadastro não precisa ser feito todo de uma vez. | Baixa
RNF-004 | Animação da rota do motorista. | Baixa
RNF-005 | Chat in plataforma para comunicação de estudante de motorista. | Medio
RNF-006 | A plataforma contará com um acompanhamento para os pais | Baixa
RNF-007 | Motoristas com melhores avaliações ficam nas melhores posições.| Baixa
RNF-008 | Motoristas com notas menores ficam nas piores posições| Baixa
RNF-009 | Estudantes com avaliações ruins veem mais motoristas com avaliações ruins | Baixa
RNF-0010 | Motoristas ou estudantes com muitas denúncias são bloqueados da plataforma | Baixa

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Deve-se respeitar cada sprint |
|02| Todas as telas devem estar parcialmente responsivas  |
|03| Não se deve armazenar dados sensíveis. |
|04| As vans devem estar com todos os documentos em dia  |
|05| As vans devem ter lugares disponíveis  |

# Projeto de Interface

Nosso projeto possui 3 telas que são as principais funções da nossa aplicação, que são elas a tela de login e cadastro, a tela de listagem de vans e por último a tela de cadastro de vans.

### Tela de login e Cadastro

Na tela de login e cadastro, será possivel que o usuário forneça os dados necessários de contato como Nome, Telefone, E-mail e Endereço e possa acessar a nossa nossa plataforma.

![Tela de Login](https://user-images.githubusercontent.com/99363911/177228062-34cb4ed1-deff-4890-b982-96f2006f4f2a.png)

### Tela de listagem de vans

Na tela de listagem de vans será possível que os universitários possam buscar a melhor van para a sua situação e visitar os perfis dos motoristas, e por outro lado, os motoristas das vans poderão anunciar o seu transporte fornecendo os seus dados como Turno, Telefone, Cidade e E-mail no seu perfil.

![Listagem de Van](https://user-images.githubusercontent.com/99363911/177228064-15c3453e-b21d-46b5-b292-3ab01b152eba.png)

### Tela de cadastro de vans

Nesta tela os motoristas de vans universitárias poderão cadastrar o seu serviço para que seja listado na página principal, contanto que, forneça todos os dados solicitados no cadastro.

![Cadastro de Vans](https://user-images.githubusercontent.com/99363911/177228852-233d274e-ce1a-4f3f-95d7-e2aba1f864e5.png)

## User Flow

![User Flow - Van Universitária](https://user-images.githubusercontent.com/99363911/177230007-5173886f-4f94-4ebb-909f-0c0e9e597082.jpg)

## Wireframes

![LoginCadastro](https://user-images.githubusercontent.com/99363911/177234398-c1f8f0e6-99ef-4331-9d91-e2369c37cc05.jpg)

![Perfil do motorista](https://user-images.githubusercontent.com/99363911/177234535-a877e05e-b543-4ab3-a591-806ff381141c.jpg)

![ListagemVan](https://user-images.githubusercontent.com/99363911/177234539-0509b1db-d7b9-4d6f-840b-f91e45a8b5b6.jpg)

![PerfilUsuario](https://user-images.githubusercontent.com/99363911/177234541-8111d28a-afd6-4eb0-a16c-fc1b00f7810d.jpg)

![Perfil da Van](https://user-images.githubusercontent.com/99363911/177234597-ef37bc12-1dca-462c-9ba4-8dde3145188f.jpg)

![Perfil do motorista](https://user-images.githubusercontent.com/99363911/177234604-8708e513-7b1e-49cf-81df-ee020d1a50db.jpg)


# Metodologia

Foi usada a metodologia Scrum, na qual, os membros do grupo se reuniam diariamente na Daily Scrum para repassar os objetivos, problemas e progressos do projeto. Para o acompanhamento foi utilizado a ferramenta Trello, no qual separavamos em colunas as tarefas nas categorias A FAZER, FAZENDO E FEITO para que todos do grupo pudessem mover os cards conforme o progresso e possibilitar uma visualização geral do progresso realizado durante as semanas.

## Divisão de Papéis

### Front-end
Membro responsável: Lucas Mattos Rodrigues

### Back-end
Membro responsável: Caio Henrique Miranda dos Reis

### Documentação
Membros responsáveis: Lucas Mattos Rodrigues e Caio Henrique Miranda dos Reis

## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [(https://miro.com/app/board/uXjVO8AXjNw=/?share_link_id=390471608970)] | 
|Repositório de código | GitHub | [(https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7946100-van-universitaria)] | 
|Hospedagem do site | GitHub |  [https://icei-puc-minas-pples-ti.github.io/plf-es-2022-1-ti1-7946100-van-universitaria/codigo/van_universitaria/login.html] | 
|Protótipo Interativo | Figma | [https://www.figma.com/file/9M2UbNTCowXq4d9CH4UBEl/Vans-Universit%C3%A1rias?node-id=0%3A1] | 
|Editor de Código | Visual Code | |
|Ferramenta de comunicação | Trello | |
| User Flow | Google Drawings | [https://docs.google.com/drawings/d/1JoFSHkkG0Yno6OUhw8WmwnXAcuFjliTo5GOz0-lD-es/edit?usp=sharing] |
| Apresentação | Canva | [https://www.canva.com/design/DAE-X3GBC0c/anTs6CEPbPBTPO3vj4YPbA/view?utm_content=DAE-X3GBC0c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton] |

# Projeto da Solução

## Tecnologias Utilizadas

### HTML
Utilizado para construir os elementos visuais da aplicação web.

### CSS
Utilizado para estilizar os componentes visuais da aplicação web.

### JS
Utilizado para realizar as funções e funcionalidades da aplicação web.

### JSON
Utilizado para salvar os dados em Local Storage.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
