/**
 * Created by Acer on 2017/12/11.
 */
import React,{Component} from 'react';
import ProductStyle from './ProductTabel/ProductStyle1/Productstyle1'

export default class extends Component{
    constructor (props) {
        super();
        this.state={
            data:"你好"
        }
    }


    render(){
        return(
            <div>
            <h1 >{this.state.data}</h1>
            <ProductStyle/>
        </div>
    )}
}