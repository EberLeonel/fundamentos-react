import "./App.css"
import React from "react";

import Primeiro from "./componets/Primeiro";
import ComParametro from "./componets/ComParametro";
import ComFilhos from "./componets/ComFilhos";
import Card from "./componets/layout/Card";

export default props => (
    <div className="App">        
        <Card titulo="Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>bia</li>
                    <li>Lia</li>
                    <li>Jao</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componente com Parametro">
            <ComParametro titulo="Esse é o título" 
            subtitulo ="Esse é o subtítulo" />
        </Card>
        <Card titulo="Primeiro Componente">
            <Primeiro/>
        </Card>

    
    </div>
    
);