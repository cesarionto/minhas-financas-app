import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from './views/Login'
import CadastroUsuario from './views/CadastroUsuario'
import Home from './views/Home'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={CadastroUsuario} />
                <Route path="/home" component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas