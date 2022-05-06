import React from "react";
import { useContext, useState, useEffect  } from "react";
import { UsuarioCard2 }from "../../components/Usuario/Usuario";
import { UsuarioContext } from "../../common/context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import Paginacao from "../../components/Paginacao/Paginacao";
import "../../assets/css/components/detalhesDoUsuario.css"
import "../../assets/css/components/repositorioCard.css"

export default function Repositorio() {
    const { usuario } = useContext( UsuarioContext);
    const history = useNavigate();
    const [repos, setRepos] = useState([]);

    const limite = 10;
    const totalItems = usuario.public_repos;
    const [offset, setOffset] = useState (1);

    useEffect(() => {
        fetch(`https://api.github.com/users/${usuario.login}/repos?page=${offset}&per_page=${limite}`).
        then((x) => x.json()).
        then((novoRepositorio) => {
           const aux = [...repos, ...novoRepositorio]
           setRepos(aux);
        })
    }, [offset])

    function mostrarDescricao(description) {
        if (!(description === null)) {
           return<> <p className="texto_repositorio2"> Descrição: </p> <p className="texto_repositorio"> {description} </p> <p className="divisao"> | </p> </>
    }}

    function exibicaoNome(){
        if (usuario.name === null) {
            return usuario.login}
        return usuario.name
    }
    
    function renderRespo() {
     return (<> 
        {repos.map((projeto) => (     
         < div className =  "card" key = {projeto.id}> 
                <p className="texto_repositorio"> Nome do projeto: <p className="titulo_card"> {projeto.name} </p > </p> 
                <p className="divisao"> | </p>
                {mostrarDescricao(projeto.description)}
                <a href={projeto.html_url}><button className="botao_repositorio"> Visitar projeto </button></a>
         </ div> )
        )}
     </>)
    }

    return (<>
        <h1 className="titulo_repositorio"> Bem vindo ao perfil {exibicaoNome()}</h1>

        <div className="barra_opcoes">
            <p className="texto_barra"> Repositorio </p>
            <p className="separacao_barra"> | </p>
            <button
                className="botao_barra"
                onClick = {(() => history('/favoritos'))}
            > Projetos Favoritos </button>
        </ div>

        <div className="wrapper">
            <div className="left">
             <UsuarioCard2/>
            </div>

            <div className="right">  
             {(repos.length > 0)? renderRespo() : <p className="texto_aviso"> {exibicaoNome()} ainda não tem nenhum projeto público em seu repositório... </p>}
            </ div>
        </div>

        <div className = "paginas" >
         {totalItems > repos.length && (      
            <Paginacao 
                limit = {limite} 
                total = {totalItems} 
                offset = {offset} 
                setOffset = {setOffset} 
            />
         )}
        </div>
    </>)
};