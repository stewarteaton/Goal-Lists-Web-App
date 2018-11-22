import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
//link to change pages
import { Link } from 'react-router-dom';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            error: {
                message:''
            }
        }
    }

    signUp() {
        console.log('this.sate',this.state); 
        const {email,password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error});
            })
    
    }

    render () {
        return (
            <div className="form-inline signUpPage">
            <div className="signUpContainer">
                <h2>Sign Up</h2>
                <div className="inputGroup">
                    <input 
                        className="form-control"
                        type="text"
                        style={{marginRight:'5px'}}
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input 
                        className="form-control"
                        type="password"
                        style={{marginRight:'5px'}}
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button 
                        className="btn btn-primary"
                        style={{marginTop:'2%'}}
                        type="button"
                        onClick={() => this.signUp()}>
                        Sign Up
                    </button>
                </div>
                    <div style={{color:'red',margin:'2%'}}>{this.state.error.message}</div>
                    <div><Link to={'/signin'} className="changePageLink" style={{marginLeft:'.5%'}}>Already a member? Sign In</Link></div>
            </div>
            </div>

        )
    }
}

export default SignUp;