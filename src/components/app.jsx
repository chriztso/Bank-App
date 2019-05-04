import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './loginPage.jsx';
import AppStyle from './app.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: true,
            form: false,
            username: null, 
            password: null
        }
    this.handlePassword = this.handlePassword.bind(this);   
    this.handleUsername = this.handleUsername.bind(this);   
    this.submitLogin = this.submitLogin.bind(this);   
    }

    handleUsername(event){
        this.setState({username: event.target.value})
    }
    handlePassword(event){
        this.setState({password: event.target.value})
    }

    submitLogin(){
        this.setState({login: false, form: true});
    }

    render(){
        var {login} = this.state; 
        var loginPage;
        if(login === true){
            loginPage = 
            <div >
                <LoginPage handlePassword = {this.handlePassword} handleUsername = {this.handleUsername} submitLogin={this.submitLogin}/>
            </div>
        }
        return (
            <div className={AppStyle.appBackground}>
               {loginPage}
           </div>
        )
    }
}

export default App;