import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import { signinUser }       from '../../actions/auth.js';
import    { Link }          from 'react-router';

class Signin extends Component {
   handleFormSubmit(formProps) {
     console.log(formProps);
     this.props.signinUser(formProps);
   }
  //
  // renderAlert() {
  //   if(this.props.errorMessage) {
  //     return (
  //       <div className="alert alert-danger">
  //         <strong>Oops!</strong> {this.props.errorMessage}
  //       </div>
  //     )
  //   }
  // }
  //
  render(){
    const { handleSubmit, fields: { organizationId, email, password }} = this.props;
    return (

      <div className="wrapper">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <div className="form-wrapper">
              <div className="panel panel-default">
                <div className="panel-body">
                        <div className="form-title">
                        <h1>Log In<div className="float-left">
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
                            <label>Email</label>
                            <input className="form-control" type="email" {...email} />
                          </div>
                          <div className="form-group">
                            <label >Password</label>
                            <input className="form-control" {...password}/>
                              {password.touched && password.error && <div className="alert alert-danger">{password.error}</div>}
                          </div>


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

function mapStateToProps(state){
//  console.log(state.auth.allOrgs)
  return { allOrgs: state.auth.allOrgs}

}

export default reduxForm({
  form: 'signin',
  fields: ['organizationId', 'email', 'password']
}, mapStateToProps,{signinUser:signinUser} )(Signin);
