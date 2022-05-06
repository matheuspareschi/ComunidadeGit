import React from 'react';
import { Button } from '@mui/material';
import useUsuarioContext from '../../common/context/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/components/usuarioCard.css'

function UsuarioCard(){
 const {
     usuario
 } = useUsuarioContext();

 let history = useNavigate();

 function exibicaoBio(){
    if (usuario.bio) {
        return (<>
         <p className="texto1_usuario"> Descrição: </p>
         <p className='texto2_usuario'> {usuario.bio} </p>
        </>)
    }
 }

 function exibicaoNome(){
    if (usuario.name === null) {
        return usuario.login}
    return usuario.name
 }

 return (
    <div className='container_usuario'>
        <img 
            alt = {`imagem de perfil do ${usuario.login}`} 
            src = {usuario.avatar_url} 
            className = 'avatar'
        />    
        <p className="texto1_usuario"> Usuário: </p> <p className='texto2_usuario'> {exibicaoNome()} </ p>
        <p> {exibicaoBio()} </p>
        <Button 
            className="botao_cardUsuario"
            variant="outlined"
            onClick = {() =>  history('/repositorio') }
            > Conhecer {exibicaoNome()} 
        </Button>
    </div>)
}

export function UsuarioCard2(){
 const { usuario } = useUsuarioContext();

 function exibicaoBio(){
    if (usuario.bio) {
        return (<>
            <p className="texto1_usuario"> Descrição: </p>
            <p className='texto2_usuario'> {usuario.bio} </p>
        </>)
    }
 }

 function exibicaoNome(){
    if (usuario.name === null) {
        return usuario.login}
    return usuario.name
 }


 return (
    <div className='container_usuario2'>
        <img 
            alt = {`imagem de perfil do ${usuario.login}`} 
            src = {usuario.avatar_url} 
            className = 'avatar'
        />    
        <p className="texto1_usuario"> Usuário: </p> <p className='texto2_usuario'> {exibicaoNome()} </ p>
        <p> {exibicaoBio()} </p>
        <a href={usuario.html_url}> 
            <Button 
                className="botao_cardUsuario2"
                variant="outlined"
                > Visitar o GitHub de {exibicaoNome(usuario)}
            </Button>
        </a>
    </div>
 )
}
   
export default UsuarioCard;