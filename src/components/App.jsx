import React, {Component} from 'react';
import {firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import styles from '../Style.css';



class App extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render() {
        return(
            <div className="appPage">
            <div >
                <div className="topSection">
                <h1 className="appTitle">Company Tasks</h1>
                <h3>Enter a Goal</h3>
                <AddGoal />
                </div>
                <div class="lineBreak"></div>
                <h3><u>Current Goals</u></h3>
                <GoalList />
                <div class="lineBreak" />
                <h3><u>Completed Goals</u></h3>
                <CompleteGoalList />
                <div class="lineBreak" />
                <button className="btn btn-danger topSection"
                        onClick={()=> this.signOut()}
                        style={{marginLeft:'45%',fontSize:'1.7em'}}
                >Sign Out</button>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log('state',state);
    return {}
}

export default connect(mapStateToProps,null)(App);