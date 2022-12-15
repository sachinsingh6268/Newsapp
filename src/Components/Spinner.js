import { Component } from "react";
import Loading from './loading3.gif'

export default class Spinner extends Component{
    render(){
        return(
            <div>
                <img className="rounded mx-auto d-block" src={Loading} alt="loading" />
            </div>
        );
    }

}