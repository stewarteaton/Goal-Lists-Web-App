import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({ email, title });
            })
            console.log('completeGoals',completeGoals);
            this.props.setCompleted(completeGoals);
        })
   }

   clearCompleted(){
       completeGoalRef.set([]);
   }

    render() { 
        console.log('this.complete',this.props.completeGoals);
        return(
            <div>
            {
                this.props.completeGoals.map((completeGoal,index) => {
                    const { title, email } = completeGoal;
                    return (
                        <div key={index}>
                            <strong style={{marginRight:'20px',fontSize:'1.2em'}}>{title}</strong><em style={{marginRight:'20px',fontSize:'1.2em'}}>{email}</em>
                        </div>
                    )
                })
            }
            <button className="btn btn-danger clearAll" onClick={() =>this.clearCompleted()}>Clear All</button>

            </div>
        )
    }
}

function mapStateToProps(state){
    const { completeGoals } = state;
    return {
        completeGoals 
    }
}
export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);