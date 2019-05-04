import React from 'react';
import ReactDOM from 'react-dom';
import login from './loginPage.css';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div className={login.wholePage}>

                <div> 
                    <div className={login.title}>
                        Pace Bank
                    </div>

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
                            <input type ='text'></input>
                            </div>
                            <div>
                            <input type ='text'></input>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default LoginPage;