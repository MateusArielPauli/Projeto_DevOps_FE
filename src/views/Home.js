export default function Home(){
    return(
        <>
            <center>
            
                <h1>Passeios Turísticos</h1>
                <br/>
                <img src="https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/06/cataratas-do-iguacu-capa.jpg" usemap="#Map" />
                
            
                <br/>
                <br/>

                
                <h1>Lista de Pacotes</h1>

                <table id="pacotes-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>&emsp;&emsp;Destino</th>
                            <th>&emsp;&emsp;Preço</th>
                        </tr>
                        <tr>
                            <td>Pacote 1</td>
                            <td>&emsp;&emsp;Cataratas</td>
                            <td>&emsp;&emsp;R$ 150,00</td>
                        </tr>
                        <tr>
                            <td>Pacote 2</td>
                            <td>&emsp;&emsp;Parque das Aves</td>
                            <td>&emsp;&emsp;R$ 50,00</td>
                        </tr>
                        <tr>
                            <td>Pacote 3</td>
                            <td>&emsp;&emsp;Usina de Itaipu</td>
                            <td>&emsp;&emsp;R$ 250,00</td>
                        </tr>
                        <tr>
                            <td>Pacote 4</td>
                            <td>&emsp;&emsp;Refúgio Biológico</td>
                            <td>&emsp;&emsp;R$ 80,00</td>
                        </tr>
                        <tr>
                            <td>Pacote 5</td>
                            <td>&emsp;&emsp;Marco das Três Fronteiras</td>
                            <td>&emsp;&emsp;R$ 50,00</td>
                        </tr>
                        <tr>
                            <td>Pacote 6</td>
                            <td>&emsp;&emsp;Itaipu Ecomuseu</td>
                            <td>&emsp;&emsp;R$ 120,00</td>
                        </tr>
                    </thead>
                    <tbody id="pacotes-list"></tbody>
                </table>

            

            </center>
        </>
    );
}
