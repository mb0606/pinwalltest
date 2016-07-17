import React, { Component } from 'react';
import        { Link }      from 'react-router';
import        { connect }   from 'react-redux';
import      { signoutUser } from '../actions/auth.js';



class NavBar extends Component {


  renderLinks() {
    console.log("LOCAL STORAGE IN NAVBAR", localStorage)

    if (this.props.authenticated) {
        const userId  = localStorage.getItem('currentUser');
        const orgId   = localStorage.getItem('orgId');

      return (
        <ul className="nav navbar-nav navbar-right">
            <li>
                <Link to={"/organizations/" + orgId + "/" +"users/" + userId + "/notes"}>Create Note </Link>
            </li>
            <li>
                <a
                onClick={() => this.props.signoutUser()}
                >Logout</a>
            </li>
     </ul>
          )

    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signin">Login</Link>
            </li>
        </ul>
          )
    }

  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-fixed-top navbar-default">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to={"/"} className="navbar-brand" href="#">
                <img alt="Brand" src="/style/images/white_PiNWALL1.svg" />
              </Link>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </form>

                {this.renderLinks()}

            </div>
          </div>
        </nav>

      </div>
      /* /.container-fluid */
    )
  }
}


function mapStateToProps(state) {
  console.log("this is state in the NAVBAR ", state);
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, {signoutUser:signoutUser})(NavBar);
