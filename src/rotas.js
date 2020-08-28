import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from './views/Login'
import CadastroUsuario from './views/CadastroUsuario'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas