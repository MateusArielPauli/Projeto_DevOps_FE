export default function UserForm(){
    return(
        <>
            <h2> Usuário </h2>

            <div>
                <div>
                    <label>Nome</label>
                    <input type="text" className="form-control"></input>
                </div>

                <div>
                    <label>E-mail</label>
                    <input type="email" className="form-control"></input>
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" className="form-control"></input>
                </div>

                <div>
                    <button type="button" className="btn btn-primary">Salvar</button>
                </div>
            </div>
        </>
    );
}