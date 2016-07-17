import React, { Component } from 'react';
import  { reduxForm }       from 'redux-form';
import { signupUser }       from '../../actions/auth.js';
import    { Link }          from 'react-router';


class Signup extends Component {

  handleFormSubmit(formProps){
    console.log("this is form props", formProps)
    this.props.signupUser(formProps);
  }
  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          Your sign up has failed
        </div>
      )
    }
  }

  render(){
    const { handleSubmit, fields: {organizationId, username, firstname, lastname ,email, password, passwordConfirm}} = this.props;
    return (

      <div className="wrapper">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <div className="form-wrapper">
              <div className="panel panel-default">
                <div className="panel-body">
                        <div className="form-title">
                        <h1>Signup<div className="float-left">
                        <Link to={"/"} ><i className="fa fa-times"
                        aria-hidden="true"></i></Link></div></h1></div>

                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                            <div className="form-group" >
                              <label id="org" for="Select-Org">Please select your organization</label>
                               <select name="Select-Org" className="form-control" {...organizationId} required>
                                <option>choose ...</option>
                                { this.props.allOrgs.map( org => <option key={org.id} value={org.id}>{org.name}</option>) }
                              </select>
                            </div>


                          <div className="form-group">
                            <label>Username:</label>
                            <input className="form-control" {...username}/>
                          </div>
                          <div className="form-group">
                            <label >Firstname</label>
                            <input className="form-control" {...firstname}/>
                          </div>
                          <div className="form-group">
                            <label>Lastname</label>
                            <input className="form-control"  {...lastname}/>
                          </div>
                          <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" {...email} />
                          </div>
                          <div className="form-group">
                            <label >Password</label>
                            <input className="form-control" {...password}/>
                              {password.touched && password.error && <div className="alert alert-danger">{password.error}</div>}
                          </div>
                          <div className="form-group">
                            <label>Password Confirm</label>
                            <input className="form-control" {...passwordConfirm}/>
                          </div>
                           {this.renderAlert()}
                          <button className="button" type="submit">Sign up</button>
                        </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
function validate(formProps){
  const errors = {};
  if(formProps.password !== formProps.passwordConfirm){
    errors.password = 'Passwords must match'
  }

  return errors;
}

function mapStateToProps(state){
//  console.log(state.auth.allOrgs)
  return { allOrgs: state.auth.allOrgs}

}

export default reduxForm({
  form: 'signup',
  fields: ['organizationId', 'username', 'firstname','lastname','email','password', 'passwordConfirm'],
  validate

}, mapStateToProps, { signupUser:signupUser })(Signup)