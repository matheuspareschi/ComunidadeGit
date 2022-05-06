import React from 'react';
import { useState, createContext, useContext} from 'react';

export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário";

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState( [] );

    return (
        <UsuarioContext.Provider
         value = {{
            usuario, 
            setUsuario,
        }}>
         { children }
        </UsuarioContext.Provider>
    )
}

export default function useUsuarioContext() {
    const {
        usuario,
        setUsuario,
    } = useContext (UsuarioContext);
    const [erro, setErro] = useState(false);

    async function buscarUsuario(nomeUsuario) {
        const url = `https://api.github.com/users/${nomeUsuario}`;
        const novoUsuario = await fetch (url);
        const x = novoUsuario;
        setUsuario(await x.json());
        (!x.ok)? setErro(true):setErro(false);
    }

    return {
        buscarUsuario,
        setUsuario,
        usuario,
        erro, 
        setErro
    }
}

