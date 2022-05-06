import React from 'react';
import { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, Button} from '@mui/material';
import useUsuarioContext  from '../../common/context/UsuarioContext'
import UsuarioCard from '../../components/Usuario/Usuario';
import '../../assets/css/components/buscaInicial.css'


export default function BuscaInicial() {
  const {
    usuario,
    buscarUsuario, 
    erro,
    setUsuario, 
    setErro
  } = useUsuarioContext();
  const [ busca, setBusca ] = useState("");

  return (
    <div className = "container">
      <h1 className = "titulo_busca"> PAGINA DE PESQUISA </h1>
      <h3 className = "texto_busca"> Pesquise pelo nome do usuário...</h3>

      <FormControl className = "caixa_busca" required>
        <InputLabel 
          className = "texto_caixa_busca"
          htmlFor="outlined-adornment-amount">Quem você procura?</InputLabel>
        <OutlinedInput 
          className = "texto_caixa_busca"
          value={busca}
          onChange={(event) => {
              setBusca(event.target.value)
          }}  
          id="outlined-adornment-amount"
          label="Caixa de pesquisa"
        />
      </FormControl>
      
      <div className="botoes">
        <Button
          className = "botao_busca" 
          variant="contained"  
          value = {busca}
          onClick = {() => {
            buscarUsuario(busca);
          }}>
            Fazer a pesquisa
        </Button>

        <Button 
          className="botao_apagar"
          onClick ={() => {
            setUsuario("");
            setBusca("");
            setErro(false)
          }}>
          Apagar
        </Button>
      </div>
        
      { (erro === true)
        ?<p className = "texto_erro"> O usuario que você pesquisou não existe! Por favor digite o nome novamente. </p>
        :<></>
      }
    
      {(usuario.id > 0)
        ?<UsuarioCard/> 
        :<> </>    
      }

    </div>
  )
};

