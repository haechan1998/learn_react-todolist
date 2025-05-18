import React from 'react';
import List from './List';

const FinishedList = ({ lists, onToggle, onRemove, onSelect }) => (

    <div className="FinishedList todoBox">
        <List
            lists={lists}
            onToggle={onToggle}
            onRemove={onRemove}
            onSelect={onSelect} />
    </div>
    
);

export default FinishedList;