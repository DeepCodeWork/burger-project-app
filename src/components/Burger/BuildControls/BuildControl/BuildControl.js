import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className = { classes.BuildControl }>
            <div className = { classes.lable }>{ props.lable }</div>
            <button className = { classes.Less } 
                onClick = { props.removed } 
                disabled = { props.disable }>Less</button>
            <button className = { classes.More }
                onClick = { props.added }>More</button>
        </div>
    );
}

export default BuildControl;