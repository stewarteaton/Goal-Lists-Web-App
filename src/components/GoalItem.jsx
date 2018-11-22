import React, {Component} from 'react';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {

    completeGoal(){
        //add to complete goals on database
        //remove this goal from goals reference
        const { email } = this.props.user;
        const { title , serverKey } = this.props.goal;
        console.log('email',email,'title',title, 'serverKey',serverKey);
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
    }
    render(){
        const { email, title } = this.props.goal;
        return(
            <div style={{margin:'5px'}}>
                <strong style={{marginRight:'20px', fontSize:'1.2em'}}>{title}</strong>
                <span style={{marginRight:'20px',fontSize:'1.2em'}}>Submitted by <em>{email}</em></span>
                <button 
                    className = "btn btn-small btn-primary"
                    onClick = {()=> this.completeGoal()}
                >Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user }  = state;
    return {
        user
    }
}

export default connect(mapStateToProps,null)(GoalItem);