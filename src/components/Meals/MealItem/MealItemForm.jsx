import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return (
        <React.Fragment>
            <form className={classes.form}>
                <Input
                    label='Amount'
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                    }}
                />
                <button>+ Add</button>
            </form>
        </React.Fragment>
    )
}

export default MealItemForm;
