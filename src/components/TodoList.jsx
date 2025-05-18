import React from 'react';
import List from './List';

const TodoList = ({ lists, onToggle, onRemove, onSelect }) => (

    <div className="TodoList todoBox">
        <List
            lists={lists}
            onToggle={onToggle}
            onRemove={onRemove}
            onSelect={onSelect} />
    </div>
    
);

export default TodoList;