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

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

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
