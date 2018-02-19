import React, { Component } from 'react';


class Signin extends Component {
  render() {
    return (
        <nav id="signin" className="nav toggle-wrap">
        <ul className="toggle_menu">
                <li><a href="https://livedemo00-opencart.template-help.com/opencart_prod-13124/index.php?route=account/login">Login</a></li>
                <li><a href="https://livedemo00-opencart.template-help.com/opencart_prod-13124/index.php?route=account/register">Register</a></li>
        </ul>
        </nav>
    );
  }
}

export default Signin;