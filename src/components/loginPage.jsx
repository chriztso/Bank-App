import React from 'react';
import ReactDOM from 'react-dom';
import login from './loginPage.css';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hidden: false
        }
    this.hidePassword = this.hidePassword.bind(this);    
    }

    hidePassword(){
        this.setState({hidden : !this.state.hidden});
    }
    render(){
        return (
            <div className={login.wholePage}>

                <div className={login.wholePageInner}> 

                    <div className={login.credentials}>
                        <div className={login.fields}>
                            <div>
                                Username: 
                            </div>
                            <div>
                                Password:
                            </div>
                        </div>

                        <div className={login.fieldsInput}>
                            <div>
                              <input type ='text' onChange={this.props.handleUsername}></input>
                            </div>
                            <div>
                              <input type ={this.state.hidden ? 'password': 'text'} onChange={this.props.handlePassword}></input>
                              <input type ='submit' value="Show/Hide" onClick={this.hidePassword}></input>
                            </div>
                            <div>
                              <input type ='submit' onClick={this.props.submitLogin}></input>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default LoginPage;