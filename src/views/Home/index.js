import React from 'react'
import api from '../../api'

class Home extends React.Component {
    state = {
        saldo: 0
    }
    //É executado sempre que o componnte é montado
    componentDidMount(){
        const usuario_logado = localStorage.getItem('_usuario_logado')
        const usuario_logado_objeto = JSON.parse(usuario_logado)
        console.log(usuario_logado_objeto)
        api.get(`/usuarios/${usuario_logado_objeto.id}/saldo`).then(response =>{
            this.setState({saldo: response.data})
        }).catch(erro =>{
            console.log(erro.response)
        })
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#/cadastro" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                    <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
                </p>
            </div>
        )
    }
}

export default Home