import React, {Component} from 'react';
import Menu from '../menu';

export default class Products extends Component {

    buy() {

        alert("You have bought this item");

    }

    render() {

        return(

            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="well">
                        <Menu />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="well">
                            <div className="row">
                                <div className="col-md-3 portfolio-item">
                                    <a href="">
                                        <img className="img-responsive" src="images/Pro1.png" alt="Baripada Mixture" />
                                        <button onClick={this.buy.bind(this)} className="btn btn-default">Buy</button>
                                    </a>
                                </div>
                                <div className="col-md-3 portfolio-item">
                                    <a href="">
                                        <img className="img-responsive" src="images/Pro1.png" alt="Baripada Mixture" />
                                        <button onClick={this.buy.bind(this)} className="btn btn-default">Buy</button>
                                    </a>
                                </div>
                                <div className="col-md-3 portfolio-item">
                                    <a href="">
                                        <img className="img-responsive" src="images/Pro1.png" alt="Baripada Mixture" />
                                        <button onClick={this.buy.bind(this)} className="btn btn-default">Buy</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>

        );

    }
}