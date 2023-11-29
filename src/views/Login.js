import React from "react";

export default function Login(){
    return(
        <>
            <center>
                <br/>
                <br/>
                <h2>Entre com seu usuário e senha</h2>
                <br/>
                <br/>

            
                <form>
                    <label htmlFor="username">Usuário: &emsp;&emsp;</label>
                    <input type="text" id="username" name="username" required />
                    <br/>
                    <br/>
                    <label htmlFor="password"> Senha:&emsp;&emsp;&emsp;</label>
                    <input type="password" id="password" name="password" required />
                    <br/>
                    <br/>
                    <button type="submit">Entrar</button>
                </form>
                <br/>
                <br/>
                Por razões de segurança, por favor clique em "Sair" quando<br/>
                 terminar de acessar os serviços que precisam de autenticação!
            </center>
        </>
    );
}
