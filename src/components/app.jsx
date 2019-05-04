import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './loginPage.jsx';
import AppStyle from './app.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: true
        }
    }
    render(){
        var {login} = this.state; 
        var loginPage;
        if(login === true){
            loginPage = 
            <div >
                <LoginPage />
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