import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import Card from '../../Components/Card'
import FormGroup from '../../Components/FormGroup'
import {withRouter} from 'react-router-dom'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email: ', this.state.email, 'Senha: ', this.state.senha)
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro')
    }

    render() {
        return (
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="exempleInputEmail">
                                                    <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control"
                                                        id="exempleInputEmail" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="exempleInputSenha">
                                                    <input type="password" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} className="form-control"
                                                        id="exempleInputSenha" placeholder="Password" />
                                                </FormGroup>
                                            </fieldset>
                                            <button className="btn btn-success" onClick={this.entrar}>Entrar</button>
                                            <button onClick={this.prepareCadastrar}className="btn btn-danger">Cadastrar</button>                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter( Login )