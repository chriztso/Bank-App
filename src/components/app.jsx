import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './loginPage.jsx';
import AppStyle from './app.css';
import Form from './customerForm.jsx';
import ProductList from './Products.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: true,
            form: false,
            product: false,
            username: null, 
            password: null, 
            warning: false
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
        if(this.state.username !== null && this.state.password !== null){
          this.setState({login: false, form: true});
        } else{
           this.setState({warning: true});
        }    
    }

    submitForm(){
        this.setState({form: false, product: true});
    }

    render(){
        var {login} = this.state; 
        var {form} = this.state; 
        var {product} = this.state;
        var warningOne;
        var warningTwo;
        var loginPage;
        var customerForm;
        var products;
        if(login === true){
            if(this.state.username === null && this.state.warning === true){
                warningOne = 
                <div className={AppStyle.warning}> 
                    Please enter username.
                </div>
            }
            if(this.state.password === null && this.state.warning === true){
                warningTwo = 
                <div className={AppStyle.warning}> 
                    Please enter password.
                </div>
            }
            loginPage = 
            <div >
                <LoginPage handlePassword = {this.handlePassword} handleUsername = {this.handleUsername} submitLogin={this.submitLogin}/>
                {warningOne}
                {warningTwo}
            </div>
        }
        if(form === true){
            customerForm = 
            <div >
                <Form submitForm = {this.submitForm}/>
            </div>
        }
        if(product === true){
            products = 
            <div>
                <ProductList />
            </div>
        }
        
        return (
            <div className={AppStyle.appBackground}>
              <div className={AppStyle.title}>
                Pace Bank
              </div>
               {loginPage}
               {customerForm}
               {products}
           </div>
        )
    }
}

export default App;