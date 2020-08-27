import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import Card from '../Card';
import FormGroup from '../FormGroup';

class Login extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="exempleInputEmail">
                                                    <input type="email" className="form-control"
                                                    id="exempleInputEmail" aria-describedby="emailHelp" placeholder="Digite o Email"/>
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="exempleInputSenha">
                                                    <input type="password" className="form-control"
                                                    id="exempleInputSenha" placeholder="Password"/>
                                                </FormGroup>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default Login;