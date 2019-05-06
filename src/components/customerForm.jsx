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
                    <div className={Customer.element}> 
                        First Name: 
                    </div>
                    <div className={Customer.element}> 
                        Last Name: 
                    </div>
                    <div className={Customer.element}>  
                        Address:
                    </div>
                    <div className={Customer.element}> 
                        Zip Code:
                    </div>
                    <div className={Customer.element}> 
                        City:
                    </div>
                    <div className={Customer.element}> 
                        State:
                    </div>
                    <div className={Customer.element}> 
                        Occupation:
                    </div>
                    <div className={Customer.element}> 
                        Company:
                    </div>
                    <div className={Customer.element}> 
                        Income:
                    </div>

                </div>

                <div className={Customer.formInputs}>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "firstName" onChange={this.props.handleFormInput}></input>
                      {this.props.info.firstName === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "lastName" onChange={this.props.handleFormInput}></input>
                      {this.props.info.lastName === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "address"  onChange={this.props.handleFormInput}></input>
                      {this.props.info.address === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "zipCode" onChange={this.props.handleFormInput}></input>
                      {this.props.info.zipCode === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "city" onChange={this.props.handleFormInput}></input>
                      {this.props.info.city === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "state" onChange={this.props.handleFormInput}></input>
                      {this.props.info.state === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "occupation" onChange={this.props.handleFormInput}></input>
                      {this.props.info.occupation === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "company" onChange={this.props.handleFormInput}></input>
                      {this.props.info.company === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div className={Customer.inputFieldOuter}> 
                      <input type ='text' className={Customer.inputField} name = "income" onChange={this.props.handleFormInput}></input>
                      {this.props.info.income === null && this.props.status && <div className={Customer.required}> Required field </div>}
                    </div>
                    <div>
                      <input type="submit" onClick={this.props.submitForm} onChange={this.props.handleFormInput}></input>
                   </div>
                </div>


             </div> 


           </div>
        )
    }
}

export default CustomerForm;