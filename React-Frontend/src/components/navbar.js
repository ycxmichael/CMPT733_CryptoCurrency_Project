import React, { Component } from 'react';

class NavBar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="https://www.google.ca">Navbar</a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="https://www.google.ca">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="https://www.google.ca">Features</a>
                    <a className="nav-item nav-link" href="https://www.google.ca">Pricing</a>
                    
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;