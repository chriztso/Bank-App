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
            warning: false, 
            firstName: null, 
            lastName: null, 
            address: null, 
            zipCode: null, 
            city: null, 
            state: null, 
            occupation: null, 
            company: null, 
            income: null,
            incompleteForm: false
        }
    this.handlePassword = this.handlePassword.bind(this);   
    this.handleUsername = this.handleUsername.bind(this);   
    this.submitLogin = this.submitLogin.bind(this);   
    this.handleFormInput = this.handleFormInput.bind(this);
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

    handleFormInput(event){
        var name = event.target.name;
        this.setState({[name] : event.target.value});
    }

    submitForm(){
        if(this.state.firstName !== null && this.state.lastName !== null && this.state.address !== null && this.state.zipCode !== null && this.state.city !== null 
        & this.state.state !== null && this.state.occupation !== null && this.state.company !== null && this.state.income !== null){
          this.setState({form: false, product: true});
        } else{
            this.setState({incompleteForm : true});
        }
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
                <LoginPage handlePassword = {this.handlePassword} handleUsername = {this.handleUsername} submitLogin={this.submitLogin} />
                {warningOne}
                {warningTwo}
            </div>
        }
        if(form === true){
            customerForm = 
            <div >
                <Form submitForm = {this.submitForm} handleFormInput = {this.handleFormInput} info={this.state} status={this.state.incompleteForm}/>
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