import React from 'react';
import ReactDOM from 'react-dom';
import Customer from './customerForm.css'

class CustomerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }


    render(){
        return (
            <div className={Customer.wholeForm}>

              <div className={Customer.title}>
                Your Information
              </div> 
              
              <div className={Customer.formElements}> 
                <div className={Customer.formFields}>
                    <div> 
                        First Name: 
                    </div>
                    <div> 
                        Last Name: 
                    </div>
                    <div> 
                        Address:
                    </div>
                    <div> 
                        Zip Code:
                    </div>
                    <div> 
                        City:
                    </div>
                    <div> 
                        State:
                    </div>
                    <div> 
                        Occupation:
                    </div>
                    <div> 
                        Company:
                    </div>
                    <div> 
                        Income:
                    </div>

                </div>

                <div className={Customer.formInputs}>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div> 
                      <input type ='text'></input>
                    </div>
                    <div>
                      <input type="submit" onClick={this.props.submitForm}></input>
                   </div>
                </div>


             </div> 


           </div>
        )
    }
}

export default CustomerForm;