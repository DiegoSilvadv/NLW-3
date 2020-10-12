import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';


// rota da aplicação com reactJS
function Routes(){
    return(
        <BrowserRouter>
            {/* Uso do Switch faz com que uma única rota seja exida em tela  */}
            <Switch>
                {/* Uso da propriedade exact para fazer uma comparação de igualdade Exemplo o caminho 
                precisa ser somente "/" para que não chame mais de uma tela  */}
                <Route path="/" exact component={Landing} /> 
                <Route path="/app" component={OrphanagesMap} /> 
            </Switch>
           
        </BrowserRouter>
    );
}

export default Routes;