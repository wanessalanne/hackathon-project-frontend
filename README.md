Documentação do desenvolvimento do Projeto: 
Visão Geral
Este projeto envolve a criação de um formulário de denúncia integrado a um painel administrativo utilizando um CMS (Content Management System) chamado Strapi. O formulário é implementado em HTML, CSS e JavaScript, e permite que os usuários façam denúncias que são enviadas via API para o Strapi. Uma vez recebidas, as denúncias são armazenadas no painel administrativo do Strapi para revisão.

Ferramentas e Tecnologias Utilizadas
CMS: Strapi
Frontend: HTML, CSS, JavaScript
Backend: API fornecida pelo Strapi
Fluxograma do Processo
Início

O usuário acessa a página web onde está disponível o botão "Denunciar".
Abertura do Modal

O usuário clica no botão "Denunciar".
Um modal de formulário é exibido.
Preenchimento do Formulário

O usuário preenche os campos:
Jogador Denunciado
Tipo de Denúncia (com opção de "Outros" para entrada personalizada)
Descrição da Ocorrência
Anexar Provas (arquivo opcional)
Envio do Formulário

O usuário clica no botão "Enviar Denúncia".
O formulário faz uma requisição POST à API do Strapi com os dados preenchidos.
Recepção da Requisição no Strapi

O Strapi recebe a requisição e armazena os dados no painel administrativo.
O sistema responde com uma confirmação de sucesso ou uma mensagem de erro.
Confirmação e Feedback ao Usuário

Se a requisição for bem-sucedida, o formulário desaparece e uma mensagem de agradecimento é exibida.
Um botão "Retornar ao jogo" aparece abaixo da mensagem de agradecimento.
Retorno ao Estado Inicial

O usuário clica em "Retornar ao jogo".
O modal fecha e o sistema está pronto para uma nova denúncia.
Componentes do Projeto
Modal de Formulário:

Linguagens: HTML, CSS
Funcionalidade: Captura os dados de denúncia do usuário.
Requisição à API:

Linguagem: JavaScript
Funcionalidade: Envia os dados do formulário para a API do Strapi.
Estrutura Backend (Strapi):

Linguagem: Node.js (usado pelo Strapi)
Funcionalidade: Recebe e armazena as denúncias, disponibilizando-as no painel administrativo.
Possíveis Melhorias
Validação de Dados: Implementar validações mais robustas tanto no frontend quanto no backend para garantir que os dados enviados sejam válidos.
Segurança: Adicionar mecanismos de segurança, como autenticação e autorização, para proteger o sistema contra abusos.
Notificações: Enviar notificações automáticas para os administradores quando uma nova denúncia for recebida.
Interface do Usuário: Melhorar a experiência do usuário com feedbacks visuais mais dinâmicos e uma interface mais intuitiva.
Integração com Jogos Online:
Integração Direta: Implementar APIs específicas que possam ser chamadas diretamente de dentro do jogo, facilitando o envio de denúncias sem a necessidade de sair do jogo.
Notificações em Tempo Real: Utilizar WebSockets para fornecer feedback em tempo real sobre o status da denúncia.