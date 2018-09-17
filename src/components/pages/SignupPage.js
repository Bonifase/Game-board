import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/auth';

class SignupPage extends React.Component {
    submit = (data) => this.props.signup(data).then(() => this.props.history.push("/dashboard"));
    
    render(){
          return (
            <div>
              <h1>Signup page</h1>
               <SignupForm submit={this.submit} />
            </div>
        );
    }
} 
SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};
export default connect(null, { signup })(SignupPage);