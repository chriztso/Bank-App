import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Products.css';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }

    }


    render(){
        return (
            <div>
                <div className={Product.list}>
                   Products 
                </div>

                <div>
                    <div className={Product.text}>
                      <input type="radio" value="Savings" /> Savings
                    </div>  
                    <div className={Product.text}> 
                      <input type="radio" value="Checking"/> Checking
                    </div>
                    <div className={Product.text}>
                      <input type="radio" value="Money Market"/> Money Market
                    </div> 
                    <div className={Product.text}>
                      <input type="radio" value="CD"/> CD
                    </div>
                    <div className={Product.text}>
                      <input type="radio" value="IRA CD"/> IRA CD
                    </div>
                </div>
            </div>
        
        )
    }
}    

export default ProductList;
