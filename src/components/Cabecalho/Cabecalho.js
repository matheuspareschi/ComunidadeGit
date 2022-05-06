import React from 'react';
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import  { UsuarioContext } from '../../common/context/UsuarioContext';
import '../../assets/css/components/cabecalho.css';

export default function Cabecalho() {
    let { setUsuario } = useContext(UsuarioContext);
    const history = useNavigate();

    function voltarBusca(){
        setUsuario("")
        history('/')
    };

    return (
        <header className="cabecalho"> 
            <img src='images/GitHubLogo.png' alt='logo do GitHub' className="logo" />
            <h1 className="titulo"> Comunidade Git </h1>
            <nav className="menu_cabecalho">
                <ul className="cabecalho_links">
                    <li className="lista_item">
                            <button className='botao_cabecalho' 
                            onClick={(() => voltarBusca())} >
                            <p className='texto_botao'> Buscar </p> 
                        </button>
                    </li>
                </ul>
            </nav>
            <p className="texto_cabecalho"> Conheça o que seus colegas estão construindo! </p>
        </header>
    )
}