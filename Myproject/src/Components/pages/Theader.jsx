import React,{Component} from "react";
import '../styles/Theader.css';

export default class Theader extends Component{
  render = () =>{
      return(
        <React.Fragment>
          <div className="container-fluid">
            <div className="row theader text-bg-dark">
                <div className="col-sm-4">+91 6307899113 | +91 9628290217</div>
                <div className="col-sm-4">manish20020328@gmail.com</div>
                <div className="col-sm-4">Manish Kumar</div>
            </div>
          </div>
        </React.Fragment>
      )
  }
}