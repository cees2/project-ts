import React from "react";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{text: string; onRemove: () => void}> = (props) => {
    return <li className={classes.item}>
        {props.text}
        <button className={classes.removeButton} onClick={props.onRemove}> Remove item</button>
    </li>
}

export default TodoItem;