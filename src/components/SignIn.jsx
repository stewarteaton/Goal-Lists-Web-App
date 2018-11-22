import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import { Link } from 'react-router-dom'

class SignIn extends Component{
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

    signIn() {
        console.log('this.sate',this.state); 
        const {email,password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error});
            })
    
    }

    render () {
        return (
            <div className="form-inline signInPage">
            <div className="signInContainer">
                <h2>Sign In</h2>
                <div className="inputGroup">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button 
                        className="btn btn-primary"
                        style={{marginTop:'2%'}}
                        type="button"
                        onClick={() => this.signIn()}>
                        Sign In
                    </button>
                </div>
                    <div style={{color:'red',margin:'2%'}}>{this.state.error.message}</div>
                    <div><Link to={'/signup'} className="changePageLink" style={{marginLeft:'.5%'}}>Sign Up For New Users</Link></div>
            </div>
        </div>
        )
    }
}

export default SignIn; 