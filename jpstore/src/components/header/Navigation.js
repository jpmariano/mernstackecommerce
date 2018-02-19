import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
        <div id="navigation" className="row"> 
            <ul className="nav navbar-nav  col-12">
            <li className="nav-item active">
                <a className="nav-link" href="#"><i className="fa fa-home"></i>
                Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                Features<i className="fa fa-bell-o"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-btc"></i>
                Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-user-plus"></i>
                About</a>
            </li>
            </ul>
        </div>
    );
  }
}

export default Navigation;