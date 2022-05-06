import React from 'react';
import '../../assets/css/components/rodape.css';

const Rodape = () => {
    return ( 
        <footer className='rodape'>  
             <div className='container_rodape'>
                <div className='container_linha'> 
                    <div className='rodape_coluna'>
                        <h1 className='titulo_rodape'> Comunidade Git </h1>
                        <img src='images/GitHubLogo2.png' alt='logo do GitHub' className="logo2" />
                    </div>
                    <div className='rodape_coluna'>
                        <h3 className='subtitulo_rodape'> Sobre </h3>
                        <p className='texto_rodape'> Projeto desenvolvido para consulta de usuários e seus respectivos repositórios. 
                            Favorite seus repositórios!
                            Mergulhe no universo do GitHub...
                        </p>
                    </div>  
                    <div className='rodape_coluna2'>
                        <p className='legenda'> Projeto desenvolvido por Matheus Pareschi para o programa de bolsas da Compass UOL </p>
                        <img src='images/compassLogo.png' alt='logo da Compass' className="compassLogo" />
                    </div>  
                </div>
             </div>
        </footer>
    )
}

export default Rodape;