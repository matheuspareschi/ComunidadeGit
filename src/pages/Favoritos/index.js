import React from "react";
import { useState, useEffect, useContext } from "react";
import {UsuarioCard2 }from "../../components/Usuario/Usuario";
import { UsuarioContext } from "../../common/context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import Paginacao from "../../components/Paginacao/Paginacao";
import "../../assets/css/components/repositorioCard.css"
import "../../assets/css/components/detalhesDoUsuario.css"


export default function Favoritos() {
    const {
        usuario
    } = useContext( UsuarioContext);
    const history = useNavigate();
    const [starred, setStarred] = useState([]);

    const limite = 10;
    const [totalItems, setTotalItems] = useState(0);
    const [offset, setOffset] = useState (1);

    useEffect(() => {
        fetch(`https://api.github.com/users/${usuario.login}/starred`).
        then((x) => x.json()).
        then((novoStarred) => {
           setTotalItems(novoStarred.length);
        })
    }, [offset])

    useEffect(() => {
      fetch(`https://api.github.com/users/${usuario.login}/starred?page=${offset}&per_page=${limite}`).
      then((x) => x.json()).
      then((novoStarred) => {
         const aux = [...starred, ...novoStarred]  
         setStarred(aux);
      })
    }, [offset])

   function mostrarDescricao(description) {
        if (!(description === null)) {
        return<> <p className="texto_repositorio2"> Descrição: </p> <p className="texto_repositorio"> {description} </p> <p className="divisao"> | </p> </>
        }
    }

    function exibicaoNome(){
        if (usuario.name === null) {
            return usuario.login}
        return usuario.name
    }

    function renderStar() {
        return (<>
         {starred.map((projeto) => (
            <div className =  "card" key = {projeto.id}> 
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
            <button
                className="botao_barra"
                onClick = {(() => history('/repositorio'))}
            > Repositorio </button>
            <p className="separacao_barra"> | </p>
            <p className="texto_barra"> Projetos Favoritos </p>
        </ div>

        <div className="wrapper">
            <div className="left">
                <UsuarioCard2/>
            </div>

            <div className="right">            
             {(starred.length > 0) ? renderStar() : <p className="texto_aviso"> {exibicaoNome()} ainda não favoritou nenhum projeto... </p>}
            </div>
        </div>

        <div
          className="paginas"  >
            {totalItems > starred.length && (      
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