import React from 'react';
import Card from '../../Components/Card';
import 'bootswatch/dist/flatly/bootstrap.css'
import FormGroup from '../../Components/FormGroup';



class CadastroUsuario extends React.Component {
    state ={
        nome : '',
        email : '',
        senha : '',
        senhaRepetida : ''
    }

    cadastrar = () =>{
        console.log(this.state)
    }

    render(){
        return (
                <Card title="Cadastro de Usuários">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <fieldset>
                                    <FormGroup label="Nome: *" htmlFor="inputNome">
                                        <input className="form-control" type="text" id="inputNome" name="nome" 
                                        onChange={e => this.setState({nome: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                        <input className="form-control" type="text" id="inputEmail" name="email" 
                                        onChange={e => this.setState({email: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup className="form-control" label="Senha: *" htmlFor="inputSenha">
                                        <input className="form-control" type="password" id="inputSenha" name="senha" 
                                        onChange={e => this.setState({senha: e.target.value})}/>
                                    </FormGroup>
                                    <FormGroup label="Repita a Senha: *" htmlFor="inputSenha2">
                                        <input className="form-control" type="password" id="inputSenha2" name="senha2" 
                                        onChange={e => this.setState({senhaRepetida: e.target.value})}/>
                                    </FormGroup>
                                    <button className="btn btn-success" onClick={this.cadastrar}>Salvar</button>
                                    <button className="btn btn-danger">Cancelar</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </Card>
        );
    }
}

export default CadastroUsuario;