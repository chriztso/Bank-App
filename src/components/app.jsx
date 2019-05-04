import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './loginPage.jsx';
import AppStyle from './app.css';
import Form from './customerForm.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: true,
            form: false,
            product: false,
            username: null, 
            password: null
        }
    this.handlePassword = this.handlePassword.bind(this);   
    this.handleUsername = this.handleUsername.bind(this);   
    this.submitLogin = this.submitLogin.bind(this);   
    this.submitForm = this.submitForm.bind(this);   
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

    submitForm(){
        this.setState({form: false, product: true});
    }

    render(){
        var {login} = this.state; 
        var {form} = this.state; 
        var loginPage;
        var customerForm;
        if(login === true){
            loginPage = 
            <div >
                <LoginPage handlePassword = {this.handlePassword} handleUsername = {this.handleUsername} submitLogin={this.submitLogin}/>
            </div>
        }
        if(form === true){
            customerForm = 
            <div >
                <Form submitForm = {this.submitForm}/>
            </div>
        }
        return (
            <div className={AppStyle.appBackground}>
               {loginPage}
               {customerForm}
           </div>
        )
    }
}

export default App;