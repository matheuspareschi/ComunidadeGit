# Comunidade Git

Projeto utiliza React.js para acessar API do GitHub e retornar informações relacionadas ao usuário procurado com seus repositórios públicos e favorios. Desenvolvido para segundo desafio do programa de bolsas da Compass UOL. 

:ballot_box_with_check: Projeto entregue.

## :wrench: Funcionalidades do projeto

- :mag:`Pagina de busca`: Após a pesquisa o site retorna um card com o nome, a descrição do usuário (caso exista) e um botão que encaminha para a pagina do repositório do usuário

![pagina de busca](https://user-images.githubusercontent.com/59771424/167196840-87ba3fb3-97e7-4f5c-bc28-2a2067bd3f19.png)
- :open_file_folder: `Repositorio`: Pagina que apresenta de 10 em 10 itens os repositórios do usuário

![pagina de repositorio](https://user-images.githubusercontent.com/59771424/167196674-cfa5260f-872b-4602-a60e-9409dd38fb08.png)
- :star: `Favoritos`: Pagina que mostra os repositórios favoritados pelo usuário

![pagina de favoritos](https://user-images.githubusercontent.com/59771424/167196981-d5945895-13fc-4464-b6bd-02d34b4ce3ea.png)

## :door: Abrir e rodar o projeto

É necessário criar um projeto no react via <br> <br>
`npx create-react-app comunidadegit`

Também é importante que se instale mais duas bibliotecas no projeto:
<br> <br>
`npm i react-router-dom` e `npm install @mui/material @emotion/react @emotion/styled`

Após realizadas as instalações é necessário substituir os documentos que estão fora da pasta node_module para os arquivos que estão nesse repositório. Depois no prompt de comando, dentro da pasta comunidadegit, rodar o comando `npm start`.

## :computer: Tecnologias utilizadas
- `React`
- `JavaScript`
- `CSS`
