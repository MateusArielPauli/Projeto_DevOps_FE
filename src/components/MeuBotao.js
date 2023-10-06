import { useState } from "react";

export default function MeuBotao({ color = 'primary'}){
    
    const [count, setCount] = useState(0);

    function cliqueDoBotao(){
        alert ('Hello World!');
        setCount(count + 1);
    }
    
    return(
        <button className={'btn btn-'+color} onClick={cliqueDoBotao}>Clicou {count} vezes!</button>
    );
}